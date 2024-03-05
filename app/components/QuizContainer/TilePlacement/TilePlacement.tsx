import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes } from "@/app/utils/musicLogic";
import QuizTile from "./QuizTile/QuizTile";

const TilePlacement = ({
  items,
  setItems,
  numberOfRows,
  isResetting,
  resizeReset,
  setResizeReset,
}: {
  items: allNotes[] | string[];
  setItems: React.Dispatch<React.SetStateAction<allNotes[] | string[]>>;
  numberOfRows: number;
  isResetting: boolean;
  resizeReset: boolean;
  setResizeReset: React.Dispatch<React.SetStateAction<boolean>>;
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
    const draggedTile: allNotes | string = items[dragIndex];
    const updatedItems: allNotes[] | string[] = [...items];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedTile);
    setItems(updatedItems);
    setDraggedTileIndex(hoverIndex);
  };

  function generateRowsGrid(): React.JSX.Element {
    const itemsPerRow: number = Math.ceil(items.length / numberOfRows);
    return (
      <div className="flex flex-col gap-2 items-center">
        {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex bg-primary rounded-lg gap-4 p-2">
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
                      draggedTileIndex === rowIndex * itemsPerRow + itemIndex
                    }
                  />
                </div>
              ))}
          </div>
        ))}
      </div>
    );
  }

  return <DndProvider backend={HTML5Backend}>{generateRowsGrid()}</DndProvider>;
};

export default TilePlacement;
