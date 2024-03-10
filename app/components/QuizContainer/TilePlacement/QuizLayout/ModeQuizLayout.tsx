import React from "react";
import QuizTile from "./QuizTile/QuizTile";

type ModeQuizLayoutProps = {
  numberOfRows: number;
  items: string[] | undefined;
  moveTile: (dragIndex: number, hoverIndex: number) => void;
  draggedTileIndex: number | null;
};

const intervalSlots: number = 7;
const rowCount: Record<number, number> = {
  2: 2,
  3: 2,
  4: 3,
};

const ModesQuizLayout: React.FC<ModeQuizLayoutProps> = ({
  numberOfRows,
  items,
  moveTile,
  draggedTileIndex,
}) => {
  let itemsPerRow = Math.ceil((items!.length - 1) / numberOfRows);
  if (itemsPerRow > 4) {
    itemsPerRow = 4;
  }

  const lessSlots: number = itemsPerRow - 1;

  return (
    <>
      {items ? (
        <div className="flex flex-col items-center rounded-xl bg-base-200 p-4">
          <h3 className="text-xl font-semibold">Intervals</h3>
          <div className="w-fit rounded-lg p-4 my-4">
            <div className="flex flex-col gap-2 items-center">
              {Array.from({ length: rowCount[numberOfRows] }).map(
                (_, rowIndex) => (
                  <div
                    key={rowIndex}
                    className="flex bg-primary rounded-lg gap-4 p-2"
                  >
                    {items
                      .slice(0, intervalSlots)
                      .slice(
                        rowIndex * itemsPerRow,
                        (rowIndex + 1) * itemsPerRow
                      )
                      .map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="bg-accent rounded-md p-2"
                        >
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
                )
              )}
            </div>
          </div>
          <h3 className="text-xl font-semibold">Extra Intervals</h3>
          <div className="w-fit rounded-lg p-4 my-4">
            {Array.from({ length: rowCount[numberOfRows] }).map(
              (_, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex bg-primary rounded-lg gap-4 p-2 my-2"
                >
                  {items
                    .slice(intervalSlots, items.length)
                    .slice(rowIndex * lessSlots, (rowIndex + 1) * lessSlots)
                    .map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-accent rounded-md p-2">
                        <QuizTile
                          key={item}
                          index={
                            rowIndex * lessSlots + itemIndex + intervalSlots
                          }
                          item={item}
                          moveTile={moveTile}
                          isDragging={
                            draggedTileIndex ===
                            rowIndex * lessSlots + (itemIndex + intervalSlots)
                          }
                        />
                      </div>
                    ))}
                </div>
              )
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModesQuizLayout;
