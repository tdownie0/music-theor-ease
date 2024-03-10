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
  const lessRows: number = itemsPerRow - 1;
  return (
    <>
      {items ? (
        <div className="flex flex-col items-center rounded-xl bg-base-200 p-4">
          <h3 className="text-xl font-semibold">Intervals</h3>
          <div className="w-fit bg-accent rounded-lg p-4 my-4">
            <div className="flex flex-col gap-2 items-center">
              {Array.from({ length: 2 }).map((_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex bg-primary rounded-lg gap-4 p-2"
                >
                  {items
                    .slice(0, 7)
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
          </div>
          <h3 className="text-xl font-semibold">Extra Intervals</h3>
          <div className="w-fit bg-base-100 rounded-lg p-4 my-4">
            {Array.from({ length: 2 }).map((_, rowIndex) => (
              <div
                key={rowIndex}
                className="flex bg-primary rounded-lg gap-4 p-2 my-2"
              >
                {items
                  .slice(7, 13)
                  .slice(rowIndex * lessRows, (rowIndex + 1) * lessRows)
                  .map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-accent rounded-md p-2">
                      <QuizTile
                        key={item}
                        index={rowIndex * lessRows + itemIndex + 7}
                        item={item}
                        moveTile={moveTile}
                        isDragging={
                          draggedTileIndex ===
                          rowIndex * lessRows + (itemIndex + 7)
                        }
                      />
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModesQuizLayout;
