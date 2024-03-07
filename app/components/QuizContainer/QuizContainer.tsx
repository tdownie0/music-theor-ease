import React, { useState, useEffect, useCallback } from "react";
import { allNotes } from "@/app/utils/musicLogic";
import { windowSize } from "@/app/utils/enums";
import TilePlacement from "./TilePlacement/TilePlacement";

type QuizContainerProps = {
  currentArray: allNotes[] | string[];
  setCurrentArray: React.Dispatch<React.SetStateAction<allNotes[] | string[]>>;
  originalArray: allNotes[] | string[];
  header: string;
  description: string;
  circleQuiz?: boolean;
  selectionArray?: string[];
  setSelectionArray?: React.Dispatch<React.SetStateAction<string[]>>;
};

const QuizContainer: React.FC<QuizContainerProps> = ({
  currentArray,
  setCurrentArray,
  originalArray,
  header,
  description,
  circleQuiz,
  selectionArray,
  setSelectionArray,
}) => {
  const [isResetting, setIsResetting] = useState(false);
  const [numberOfRows, setNumberOfRows] = useState(getNumberOfRows());
  const [resizeReset, setResizeReset] = useState(false);

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

  function getNumberOfRows() {
    enum rowCount {
      sm = 4,
      lg = 3,
      xl = 2,
    }

    const windowWidth: number = window.innerWidth;
    if (windowWidth < windowSize.sm) {
      return rowCount.sm;
    }
    if (windowWidth >= windowSize.sm && windowWidth < windowSize.lg) {
      return rowCount.lg;
    }
    return rowCount.xl;
  }

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    let resizeInProgress = false;

    function handleResize() {
      if (!resizeInProgress) {
        resizeInProgress = true;
        setResizeReset(true);
        setNumberOfRows(getNumberOfRows());

        resizeTimeout = setTimeout(() => {
          resizeInProgress = false;
        }, 400);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <div className="flex flex-col w-full bg-base-300 text-base-content rounded-lg justify-center gap-4 p-8">
      <div className="flex justify-end items-center">
        <div className="w-full">
          <p className="text-xl font-bold">{header}</p>
          <p className="text-lg font-medium w-4/5 lg:w-5/6">{description}</p>
        </div>
        <button
          className="btn-circle btn-secondary btn w-24"
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
        resizeReset={resizeReset}
        setResizeReset={setResizeReset}
        circleQuiz={circleQuiz}
        selectionArray={selectionArray}
        setSelectionArray={setSelectionArray}
      />

      <div className="flex w-full justify-end">
        <button
          className="btn-primary btn-square btn w-24"
          onClick={checkOrder}
        >
          Check
        </button>
      </div>
    </div>
  );
};

export default QuizContainer;
