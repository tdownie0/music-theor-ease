"use client";
import React, { useState, useEffect } from "react";
import QuizContainer from "../components/QuizContainer/QuizContainer";
import Link from "next/link";

enum siteLink {
  Home = "Home",
  Circles = "Circles",
  Modes = "Modes",
  Quizzes = "Quizzes",
}

const circleOfFifthsArray = [
  "C",
  "G",
  "D",
  "A",
  "E",
  "B",
  "F#",
  "Db",
  "Ab",
  "Eb",
  "Bb",
  "F",
];

const CircleOfFifthsQuiz = () => {
  const [notes, setNotes] = useState(circleOfFifthsArray);
  const [originalNotes, setOriginalNotes] = useState([]);

  useEffect(() => {
    setOriginalNotes(notes);
  }, []);

  return (
    <QuizContainer
      currentArray={notes}
      setCurrentArray={setNotes}
      originalArray={originalNotes}
      header="Circle of Fifths"
      description="Arrange these tiles into the circle of fifths starting from C"
      circleQuiz
    />
  );
};

const CircleOfFourthsQuiz = () => {
  const [notes, setNotes] = useState(circleOfFifthsArray);
  const [originalNotes, setOriginalNotes] = useState([]);

  useEffect(() => {
    function getCircleNotes() {
      setOriginalNotes([...notes].reverse());
    }
    getCircleNotes();
  }, []);

  return (
    <QuizContainer
      currentArray={notes}
      setCurrentArray={setNotes}
      originalArray={originalNotes}
      header="Circle of Fourths"
      description="Arrange these tiles into the circle of fourths starting from F"
      circleQuiz
    />
  );
};

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

const Quizzes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const fadeStyles = {
    opacity: isLoading ? 0 : 1,
    transition: "opacity .7s ease-in-out",
  };

  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4" key={siteLink.Home}>
          <Link href={"/"} className="link hover:text-primary">
            {siteLink.Home}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Circles}>
          <Link
            href={`/${siteLink.Circles.toLowerCase()}`}
            className="link hover:text-accent"
          >
            {siteLink.Circles}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Modes}>
          <Link
            href={`/${siteLink.Modes.toLowerCase()}`}
            className="link hover:text-secondary"
          >
            {siteLink.Modes}
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl font-semibold mt-8 mb-8">Quizzes</h1>
      <div className="hero flex flex-col">
        <div className="hero-content flex-col">
          <div style={fadeStyles} className="flex flex-col gap-8">
            <CircleOfFifthsQuiz />
            <CircleOfFourthsQuiz />
            <ModesQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
