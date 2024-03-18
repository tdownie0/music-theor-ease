"use client";
import React, { useEffect, useState } from "react";
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

const IonianArray = ["1", "2", "3", "4", "5", "6", "7"];
const DorianArray = ["1", "2", "b3", "4", "5", "6", "b7"];
const PhrygianArray = ["1", "b2", "b3", "4", "5", "b6", "b7"];
const LydianArray = ["1", "2", "3", "#4", "5", "6", "7"];
const MixolydianArray = ["1", "2", "3", "4", "5", "6", "b7"];
const AeolianArray = ["1", "2", "b3", "4", "5", "b6", "b7"];
const LocrianArray = ["1", "b2", "b3", "4", "b5", "b6", "b7"];

const modesList = {
  Ionian: IonianArray,
  Dorian: DorianArray,
  Phygrian: PhrygianArray,
  Lydian: LydianArray,
  Mixolydian: MixolydianArray,
  Aeolian: AeolianArray,
  Locrian: LocrianArray,
};

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
