import React, { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import { allNotes } from "../../../utils/musicLogic";

type QuizTileProps = {
  note: allNotes;
  index: number;
  moveTile: (dragIndex: number, hoverIndex: number) => void;
  isDragging: boolean;
};

const QuizTile: React.FC<QuizTileProps> = ({
  note,
  index,
  moveTile,
  isDragging,
}) => {
  const tileRef = useRef<HTMLDivElement>(null);
  const [, drag] = useDrag({
    type: "QuizTile",
    item: { note, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (!monitor.didDrop()) {
        const elements = document.querySelectorAll(".animate-bounce");
        elements.forEach((element) => {
          element.classList.remove("animate-bounce");
        });
      }
    },
  });

  const [, drop] = useDrop({
    accept: "QuizTile",
    hover(item: { index: number }) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      moveTile(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop: () => {
      if (tileRef.current) {
        tileRef.current.classList.remove("animate-bounce");
      }
    },
  });

  return (
    <div ref={(node) => drag(drop(node))}>
      <div
        ref={tileRef}
        className={`flex justify-center btn-primary btn text-primary-content w-14 
                    hover:cursor-grab active:cursor-grabbing ${
          isDragging ? "animate-bounce" : ""
        }`}
        style={{ borderRadius: "8px" }}
      >
        {note}
      </div>
    </div>
  );
};

export default QuizTile;
