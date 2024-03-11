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
  modeSelection?: string;
  setModeSelection?: React.Dispatch<React.SetStateAction<string>>;
  modeSelectionList?: string[];
  currentSelectionAnswer?: string[];
};

enum rowCount {
  sm = 4,
  lg = 3,
  xl = 2,
}

const QuizContainer: React.FC<QuizContainerProps> = ({
  currentArray,
  setCurrentArray,
  originalArray,
  header,
  description,
  circleQuiz,
  modeSelection,
  setModeSelection,
  modeSelectionList,
  currentSelectionAnswer,
}) => {
  const [isResetting, setIsResetting] = useState(false);
  const [numberOfRows, setNumberOfRows] = useState(getNumberOfRows());
  const [resizeReset, setResizeReset] = useState(false);

  const shuffleArray: () => allNotes[] | string[] = useCallback(
    function shuffle(): allNotes[] | string[] {
      return originalArray.slice().sort(() => Math.random() - 0.5);
    },
    [originalArray]
  );

  const orderButtonAction: () => allNotes[] | string[] = useCallback(
    function tileOrder(): allNotes[] | string[] {
      if (circleQuiz === true) {
        return shuffleArray();
      }
      return originalArray;
    },
    [circleQuiz, originalArray, shuffleArray]
  );

  useEffect(() => {
    function orderInitialLoad() {
      setCurrentArray(orderButtonAction);
    }
    orderInitialLoad();
  }, [setCurrentArray, orderButtonAction]);

  const checkOrder: () => void = useCallback(() => {
    if (circleQuiz) {
      circleInOrder();
      return;
    }
    ModeIntervalInOrder();
  }, [
    circleQuiz,
    currentArray,
    originalArray,
    modeSelection,
    currentSelectionAnswer,
  ]);

  function ModeIntervalInOrder(): void {
    if (currentSelectionAnswer) {
      if (currentSelectionAnswer.length > 0) {
        const intervalOrdered: boolean = currentArray
          .slice(0, 7)
          .every(
            (interval, index) => interval === currentSelectionAnswer[index]
          );
        if (intervalOrdered) {
          alert("Tiles are in order!");
          return;
        }
        alert("Tiles are not in order.");
        return;
      }
    }
    alert("You must select a mode to compare intervals to.");
    return;
  }

  function circleInOrder(): void {
    const isOrdered: boolean = currentArray.every(
      (note, index) => note === originalArray[index]
    );
    if (isOrdered) {
      alert("Tiles are in order!");
      return;
    }
    alert("Tiles are not in order.");
    return;
  }

  const resetNotes: () => void = useCallback(() => {
    setIsResetting(true);
    setCurrentArray(orderButtonAction);
  }, [setCurrentArray, orderButtonAction]);

  useEffect(() => {
    if (isResetting) {
      const timeoutId = setTimeout(() => {
        setIsResetting(false);
      }, 100);
      return () => clearTimeout(timeoutId);
    }
  }, [isResetting]);

  function getNumberOfRows(): number {
    const windowWidth: number = window.innerWidth;
    if (windowWidth < windowSize.sm) {
      return rowCount.sm;
    }
    if (windowWidth >= windowSize.sm && windowWidth < windowSize.lg) {
      return rowCount.lg;
    }
    return rowCount.xl;
  }

  const handleModeSelectionChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    if (setModeSelection) {
      setModeSelection(event.target.value);
    }
  };

  useEffect(() => {
    let resizeTimeout: NodeJS.Timeout;
    let resizeInProgress = false;

    function handleResize(): void {
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

        {modeSelectionList && (
          <select
            className="dropdown menu bg-secondary text-secondary-content w-32 rounded-lg mx-4 py-3"
            value={modeSelection}
            onChange={handleModeSelectionChange}
          >
            <option className="text-secondary-content" value="select">
              Select Mode
            </option>
            {modeSelectionList &&
              modeSelectionList.map((mode) => (
                <option key={mode} className="text-secondary-content" value={mode}>
                  {mode}
                </option>
              ))}
          </select>
        )}

        <button
          className="btn-circle btn-secondary btn w-24"
          onClick={resetNotes}
        >
          {circleQuiz ? "Shuffle" : "Reset"}
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
