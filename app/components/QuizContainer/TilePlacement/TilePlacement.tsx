import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import CircleQuizLayout from "./QuizLayout/CircleQuizLayout";
import ModesQuizLayout from "./QuizLayout/ModeQuizLayout";

const TilePlacement = ({
  items,
  setItems,
  numberOfRows,
  isResetting,
  resizeReset,
  setResizeReset,
  circleQuiz,
}) => {
  const [draggedTileIndex, setDraggedTileIndex] = useState(null);

  useEffect(() => {
    if (isResetting) {
      const elements = document.querySelectorAll(".animate-bounce");
      elements.forEach((element) => {
        element.classList.remove("animate-bounce");
      });
    }
  }, [isResetting]);

  useEffect(() => {
    let timeoutId;

    if (resizeReset) {
      clearTimeout(timeoutId);

      const elements = document.querySelectorAll(".animate-bounce");
      elements.forEach((element) => {
        element.classList.remove("animate-bounce");
      });

      timeoutId = setTimeout(() => {
        setResizeReset(false);
      }, 1000);
    }

    return () => clearTimeout(timeoutId);
  }, [resizeReset, setResizeReset]);

  const moveTile = (dragIndex, hoverIndex) => {
    const draggedTile = items![dragIndex];
    const updatedItems = [...items!];
    updatedItems.splice(dragIndex, 1);
    updatedItems.splice(hoverIndex, 0, draggedTile);
    setItems!(updatedItems);
    setDraggedTileIndex(hoverIndex);
  };

  function generateRowsGrid() {
    const LayoutComponent = circleQuiz ? CircleQuizLayout : ModesQuizLayout;

    return (
      <LayoutComponent
        numberOfRows={numberOfRows}
        items={items}
        moveTile={moveTile}
        draggedTileIndex={draggedTileIndex}
      />
    );
  }

  return <DndProvider backend={HTML5Backend}>{generateRowsGrid()}</DndProvider>;
};

export default TilePlacement;
