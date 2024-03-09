import React from "react";
import QuizTile from "./QuizTile/QuizTile";

type ModeQuizLayoutProps = {
  numberOfRows: number;
  itemsPerRow: number;
  items: string[] | undefined;
  moveTile: (dragIndex: number, hoverIndex: number) => void;
  draggedTileIndex: number | null;
  lastSelections: string;
};

const ModesQuizLayout: React.FC<ModeQuizLayoutProps> = ({
  numberOfRows,
  itemsPerRow,
  items,
  moveTile,
  draggedTileIndex,
  lastSelections,
}) => {
  return (
    <>
      {items ? (
        <div className="flex flex-col gap-2 items-center">
          {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex bg-neutral rounded-lg gap-4 p-2"
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
                        draggedTileIndex === rowIndex * itemsPerRow + itemIndex
                      }
                    />
                  </div>
                ))}
            </div>
          ))}
          <div
            key={numberOfRows - 1}
            className="flex bg-neutral rounded-lg gap-4 p-2"
          >
            <div key={"extraTile"} className="bg-accent rounded-md p-2">
              <QuizTile
                key={lastSelections}
                index={items.length - 1}
                item={lastSelections}
                moveTile={moveTile}
                isDragging={draggedTileIndex === items.length - 1}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModesQuizLayout;
