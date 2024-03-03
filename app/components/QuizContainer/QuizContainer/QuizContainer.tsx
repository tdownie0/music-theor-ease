import React, { useState, useEffect, useCallback } from "react";
import { allNotes } from "../../../utils/musicLogic";
import TilePlacement from "../TilePlacement/TilePlacement";

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

  const checkOrder = (): void => {
    const isOrdered: boolean = currentArray.every(
      (note, index) => note === originalArray[index]
    );
    if (isOrdered) {
      alert("Tiles are in order!");
    } else {
      alert("Tiles are not in order.");
    }
  };

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
    <div className="flex flex-col w-full bg-base-300 text-base-content rounded-lg justify-center gap-4 p-8">
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
