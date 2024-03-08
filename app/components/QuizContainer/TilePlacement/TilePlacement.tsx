import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes } from "@/app/utils/musicLogic";
import CircleQuizLayout from "./QuizLayout/CircleQuizLayout";
import ModesQuizLayout from "./QuizLayout/ModeQuizLayout";

type TilePlacementProps = {
  items: allNotes[] | string[];
  setItems: React.Dispatch<React.SetStateAction<allNotes[] | string[]>>;
  numberOfRows: number;
  isResetting: boolean;
  resizeReset: boolean;
  setResizeReset: React.Dispatch<React.SetStateAction<boolean>>;
  circleQuiz?: boolean;
  selectionArray?: string[];
  setSelectionArray?: React.Dispatch<React.SetStateAction<string[]>>;
};

const TilePlacement: React.FC<TilePlacementProps> = ({
  items,
  setItems,
  numberOfRows,
  isResetting,
  resizeReset,
  setResizeReset,
  circleQuiz,
  selectionArray,
  setSelectionArray,
}) => {
  const [draggedTileIndex, setDraggedTileIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isResetting) {
      const elements: NodeListOf<Element> =
        document.querySelectorAll(".animate-bounce");
      elements.forEach((element) => {
        element.classList.remove("animate-bounce");
      });
    }
  }, [isResetting]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout | undefined;

    if (resizeReset) {
      clearTimeout(timeoutId);

      const elements: NodeListOf<Element> =
        document.querySelectorAll(".animate-bounce");
      elements.forEach((element) => {
        element.classList.remove("animate-bounce");
      });

      timeoutId = setTimeout(() => {
        setResizeReset(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [resizeReset, setResizeReset]);

  const moveTile = (
    dragIndex: number,
    hoverIndex: number,
    selectionTile?: boolean
  ) => {
    let currentArray: allNotes[] | string[] | undefined = items;
    let setCurrentArray:
      | React.Dispatch<React.SetStateAction<allNotes[] | string[]>>
      | undefined = setItems;
    if (selectionTile) {
      currentArray = selectionArray;
      setCurrentArray = setSelectionArray;
    }
    const draggedTile = currentArray![dragIndex];
    const updatedItems = [...currentArray!];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedTile);
    setCurrentArray!(updatedItems);
    setDraggedTileIndex(hoverIndex);
  };

  function generateRowsGrid(): React.JSX.Element {
    const itemsPerRow: number = Math.ceil(items.length / numberOfRows);
    let selectionsPerRow: number = 0;
    let lastSelections: string = "";
    if (selectionArray) {
      selectionsPerRow = Math.ceil((selectionArray.length - 1) / numberOfRows);
      lastSelections = selectionArray[selectionArray.length - 1];
    }

    return (
      <>
        {circleQuiz ? (
          <CircleQuizLayout
            numberOfRows={numberOfRows}
            itemsPerRow={itemsPerRow}
            items={items}
            moveTile={moveTile}
            draggedTileIndex={draggedTileIndex}
          />
        ) : (
          <ModesQuizLayout
            numberOfRows={numberOfRows}
            selectionsPerRow={selectionsPerRow}
            selectionArray={selectionArray}
            moveTile={moveTile}
            draggedTileIndex={draggedTileIndex}
            lastSelections={lastSelections}
          />
        )}
      </>
    );
  }

  return <DndProvider backend={HTML5Backend}>{generateRowsGrid()}</DndProvider>;
};

export default TilePlacement;
