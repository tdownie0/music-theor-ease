"use client";
import React, { useEffect, useState } from "react";
import { modesList } from "../../utils/musicLogic";
import QuizContainer from "../QuizContainer/QuizContainer";

const intervalTiles = [
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
  const [originalInterval, setOriginalInterval] = useState([]);
  const [intervalSelection, setIntervalSelection] = useState([]);
  const [modeSelection, setModeSelection] = useState("");
  const [modeSelectionList, setModeSelectionList] = useState([]);
  const [currentSelectionAnswer, setCurrentSelectionAnswer] = useState([]);

  useEffect(() => {
    setIntervalSelection(intervalTiles);
    setOriginalInterval(intervalTiles);
    setModeSelectionList(Object.keys(modesList));
  }, []);

  useEffect(() => {
    setCurrentSelectionAnswer(modesList[modeSelection]);
  }, [modeSelection]);

  return (
    <QuizContainer
      currentArray={intervalSelection}
      setCurrentArray={setIntervalSelection}
      originalArray={originalInterval}
      header="Modes"
      description="Select a mode and then fill in the slots for the correct intervals"
      modeSelection={modeSelection}
      setModeSelection={setModeSelection}
      modeSelectionList={modeSelectionList}
      currentSelectionAnswer={currentSelectionAnswer}
    />
  );
};

export default ModesQuiz;
