"use client";
import React, { useEffect, useState } from "react";
import { modesList } from "../../utils/musicLogic";
import QuizContainer from "../QuizContainer/QuizContainer";

const intervalTiles: string[] = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "b2",
  "b3",
  "b5",
  "b6",
  "b7",
  "#4",
];

const ModesQuiz = () => {
  const [interval, setInterval] = useState<string[]>([]);
  const [originalInterval, setOriginalInterval] = useState<string[]>([]);
  const [intervalSelection, setIntervalSelection] = useState<string[]>([]);

  useEffect(() => {
    setIntervalSelection(intervalTiles);
    setOriginalInterval(intervalTiles);
  }, []);

  return (
    <QuizContainer
      currentArray={intervalSelection}
      setCurrentArray={setIntervalSelection}
      originalArray={originalInterval}
      header="Modes"
      description="Select a mode and then fill in the slots for the correct intervals"
      selection
    />
  );
};

export default ModesQuiz;
