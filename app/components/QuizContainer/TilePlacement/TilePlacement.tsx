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
};

const TilePlacement: React.FC<TilePlacementProps> = ({
  items,
  setItems,
  numberOfRows,
  isResetting,
  resizeReset,
  setResizeReset,
  circleQuiz,
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

  const moveTile = (dragIndex: number, hoverIndex: number) => {
    const draggedTile = items![dragIndex];
    const updatedItems = [...items!];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedTile);
    setItems!(updatedItems);
    setDraggedTileIndex(hoverIndex);
  };

  function generateRowsGrid(): React.JSX.Element {
    return (
      <>
        {circleQuiz ? (
          <CircleQuizLayout
            numberOfRows={numberOfRows}
            items={items}
            moveTile={moveTile}
            draggedTileIndex={draggedTileIndex}
          />
        ) : (
          <ModesQuizLayout
            numberOfRows={numberOfRows}
            items={items}
            moveTile={moveTile}
            draggedTileIndex={draggedTileIndex}
          />
        )}
      </>
    );
  }

  return <DndProvider backend={HTML5Backend}>{generateRowsGrid()}</DndProvider>;
};

export default TilePlacement;
