import React, { useState, useEffect, useCallback } from "react";
import { allNotes } from "@/app/utils/musicLogic";
import TilePlacement from "./TilePlacement/TilePlacement";

interface QuizContainerProps {
  currentArray: allNotes[] | string[];
  setCurrentArray: React.Dispatch<React.SetStateAction<allNotes[] | string[]>>;
  originalArray: allNotes[] | string[];
  header: string;
  description: string;
}

const QuizContainer: React.FC<QuizContainerProps> = ({
  currentArray,
  setCurrentArray,
  originalArray,
  header,
  description,
}) => {
  const [isResetting, setIsResetting] = useState(false);
  const [numberOfRows, setNumberOfRows] = useState(getNumberOfRows());

  function getNumberOfRows() {
    const breakpoints = {
      sm: 4, // Small screens
      md: 3, // Medium screens
      lg: 2, // Large screens
      xl: 2, // Extra large screens
    };

    const windowWidth = window.innerWidth;
    if (windowWidth < 768) {
      return breakpoints.sm;
    } else if (windowWidth >= 768 && windowWidth < 1024) {
      return breakpoints.md;
    } else if (windowWidth >= 1024 && windowWidth < 1280) {
      return breakpoints.lg;
    }
    return breakpoints.xl;
  }

  useEffect(() => {
    function handleResize() {
      setNumberOfRows(getNumberOfRows());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const shuffleArray = useCallback(
    function shuffle(): allNotes[] | string[] {
      return originalArray.slice().sort(() => Math.random() - 0.5);
    },
    [originalArray]
  );

  useEffect(() => {
    function shuffleInitialLoad() {
      setCurrentArray(shuffleArray());
    }
    shuffleInitialLoad();
  }, [setCurrentArray, shuffleArray]);

  const checkOrder = useCallback(() => {
    const isOrdered: boolean = currentArray.every(
      (note, index) => note === originalArray[index]
    );
    if (isOrdered) {
      alert("Tiles are in order!");
    } else {
      alert("Tiles are not in order.");
    }
  }, [currentArray, originalArray]);

  const resetNotes = useCallback(() => {
    setIsResetting(true);
    setCurrentArray(shuffleArray());
  }, [setCurrentArray, shuffleArray]);

  useEffect(() => {
    if (isResetting) {
      const timeoutId = setTimeout(() => {
        setIsResetting(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isResetting]);

  return (
    <div className="flex flex-col w-full bg-base-300 text-base-content rounded-lg justify-center gap-4 p-8 animate-fadeIn">
      <div className="flex justify-end items-center">
        <div className="w-full">
          <p className="text-xl font-bold">{header}</p>
          <p className="text-lg font-medium">{description}</p>
        </div>
        <button
          className="btn-circle btn-secondary btn w-1/5"
          onClick={resetNotes}
        >
          Shuffle
        </button>
      </div>

      <TilePlacement
        items={currentArray}
        setItems={setCurrentArray}
        numberOfRows={numberOfRows}
        isResetting={isResetting}
      />

      <div className="flex w-full justify-end">
        <button
          className="btn-primary btn-square btn w-1/5"
          onClick={checkOrder}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
