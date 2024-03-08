import React from "react";
import QuizTile from "./QuizTile/QuizTile";

interface Props {
  numberOfRows: number;
  selectionsPerRow: number;
  selectionArray?: string[] | undefined;
  moveTile: (
    dragIndex: number,
    hoverIndex: number,
    selection?: boolean
  ) => void;
  draggedTileIndex: number | null;
  lastSelections: string;
}

const ModesQuizLayout: React.FC<Props> = ({
  numberOfRows,
  selectionsPerRow,
  selectionArray,
  moveTile,
  draggedTileIndex,
  lastSelections,
}) => {
  return (
    <>
      {selectionArray ? (
        <div className="flex flex-col gap-2 items-center">
          {Array.from({ length: numberOfRows }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className="flex bg-neutral rounded-lg gap-4 p-2"
            >
              {selectionArray
                .slice(
                  rowIndex * selectionsPerRow,
                  (rowIndex + 1) * selectionsPerRow
                )
                .map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-accent rounded-md p-2">
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
                index={selectionArray.length - 1}
                item={lastSelections}
                moveTile={moveTile}
                isDragging={draggedTileIndex === 12}
                selection
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModesQuizLayout;
