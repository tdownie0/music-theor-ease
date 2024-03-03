import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes } from "../../../utils/musicLogic";
import QuizTile from "../QuizTile/QuizTile";

const TilePlacement = ({
  items,
  setItems,
}: {
  items: allNotes[] | string[];
  setItems: React.Dispatch<React.SetStateAction<allNotes[] | string[]>>;
}) => {
  const [draggedTileIndex, setDraggedTileIndex] = useState<number | null>(null);

  const moveTile = (dragIndex: number, hoverIndex: number) => {
    const draggedTile: allNotes | string = items[dragIndex];
    const updatedNotes: allNotes[] | string[] = [...items];
    updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, draggedTile);
    setItems(updatedNotes);
    setDraggedTileIndex(hoverIndex);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex bg-primary rounded-lg gap-4 p-2">
        {items.slice(0, Math.ceil(items.length / 2)).map((item, index) => (
          <div key={item} className="bg-accent rounded-md p-2">
            <QuizTile
              key={item}
              index={index}
              item={item}
              moveTile={moveTile}
              isDragging={draggedTileIndex === index}
            />
          </div>
        ))}
      </div>
      <div className="flex bg-primary rounded-lg gap-4 p-2">
        {items.slice(Math.ceil(items.length / 2)).map((item, index) => (
          <div key={index} className="bg-accent rounded-md p-2">
            <QuizTile
              key={index}
              index={index + Math.ceil(items.length / 2)}
              item={item}
              moveTile={moveTile}
              isDragging={
                draggedTileIndex === index + Math.ceil(items.length / 2)
              }
            />
          </div>
        ))}
      </div>
    </DndProvider>
  );
};

export default TilePlacement;
