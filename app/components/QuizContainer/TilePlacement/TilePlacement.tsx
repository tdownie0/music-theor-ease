import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes } from "@/app/utils/musicLogic";
import QuizTile from "./QuizTile/QuizTile";

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
          <div className="flex flex-col gap-2 items-center">
            {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex bg-primary rounded-lg gap-4 p-2"
              >
                {items
                  .slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-accent rounded-md p-2">
                      <QuizTile
                        key={item}
                        index={rowIndex * itemsPerRow + itemIndex}
                        item={item}
                        moveTile={moveTile}
                        isDragging={
                          draggedTileIndex ===
                          rowIndex * itemsPerRow + itemIndex
                        }
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-2 items-center">
            {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex bg-neutral rounded-lg gap-4 p-2"
              >
                {selectionArray
                  ? selectionArray
                      .slice(
                        rowIndex * selectionsPerRow,
                        (rowIndex + 1) * selectionsPerRow
                      )
                      .map((item, itemIndex) => {
                        return (
                          <div
                            key={itemIndex}
                            className="bg-accent rounded-md p-2"
                          >
                            <QuizTile
                              key={item}
                              index={rowIndex * selectionsPerRow + itemIndex}
                              item={item}
                              moveTile={moveTile}
                              isDragging={
                                draggedTileIndex ===
                                rowIndex * selectionsPerRow + itemIndex
                              }
                              selection
                            />
                          </div>
                        );
                      })
                  : null}
              </div>
            ))}
            {selectionArray ? (
              <div
                key={numberOfRows - 1}
                className="flex bg-neutral rounded-lg gap-4 p-2"
              >
                <div key={"extraTile"} className="bg-accent rounded-md p-2">
                  <QuizTile
                    key={lastSelections}
                    index={selectionArray.length - 1}
                    item={lastSelections}
                    moveTile={moveTile}
                    isDragging={draggedTileIndex === 12}
                    selection
                  />
                </div>
              </div>
            ) : null}
          </div>
        )}
      </>
    );
  }

  return <DndProvider backend={HTML5Backend}>{generateRowsGrid()}</DndProvider>;
};

export default TilePlacement;
