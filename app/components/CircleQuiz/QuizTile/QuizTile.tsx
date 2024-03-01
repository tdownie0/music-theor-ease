import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { allNotes } from "../../../utils/musicLogic";

type QuizTileProps = {
  note: allNotes;
  index: number;
  moveTile: (dragIndex: number, hoverIndex: number) => void;
};

const QuizTile: React.FC<QuizTileProps> = ({ note, index, moveTile }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "QuizTile",
    item: { note, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: "QuizTile",
    hover(item: { index: number }, monitor) {
      if (!item) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveTile(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  return (
    <div ref={(node) => drag(drop(node))} >
      <div className="flex justify-center rounded-lg shadow-lg bg-base-300 p-4 w-14">
        {note}
      </div>
    </div>
  );
};

export default QuizTile;
