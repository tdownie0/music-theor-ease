import { allNotes } from "@/app/utils/musicLogic";
import React from "react";
import { useDrag } from "react-dnd";

type QuizTileProp = {
  isDragging: boolean;
  note: allNotes; // Change the type to string
};

const QuizTile: React.FC<QuizTileProp> = ({ isDragging, note }) => {
  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: "NoteTile",
      item: { note },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1,
      }),
    }),
    [note] // Specify note as a dependency
  );

  return (
    <div ref={dragRef} style={{ opacity }}>
      <div className="rounded-lg shadow-lg bg-base-300 p-4 w-full">
        {note}
      </div>
    </div>
  );
};

export default QuizTile;
