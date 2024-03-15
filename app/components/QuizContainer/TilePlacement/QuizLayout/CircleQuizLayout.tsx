import React from "react";
import QuizTile from "./QuizTile/QuizTile";

const CircleQuizLayout = ({
  numberOfRows,
  items,
  moveTile,
  draggedTileIndex,
}) => {
  let itemsPerRow = Math.ceil(items!.length / numberOfRows);

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
};

export default CircleQuizLayout;
