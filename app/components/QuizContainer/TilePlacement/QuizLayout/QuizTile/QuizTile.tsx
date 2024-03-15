import React, { useRef, useEffect } from "react";
import { useDrag, useDrop } from "react-dnd";

const QuizTile = ({ item, index, moveTile, isDragging }) => {
  const tileRef = useRef(null);
  const [, drag, preview] = useDrag({
    type: "QuizTile",
    item: { item, index },
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

  useEffect(() => {
    if (tileRef.current) {
      preview(tileRef.current);
    }
  }, [preview, tileRef]);

  const [, drop] = useDrop({
    accept: "QuizTile",
    hover(item) {
      const dragIndex: number = item.index;
      const hoverIndex: number = index;

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
        className={`flex btn-primary btn text-primary-content justify-center w-14
                    hover:cursor-grab active:cursor-grabbing ${
                      isDragging ? "animate-bounce" : ""
                    }`}
        style={{ borderRadius: "8px" }}
      >
        {item}
      </div>
    </div>
  );
};

export default QuizTile;
