"use client";
import React, { useEffect, useState } from "react";
import QuizContainer from "../../QuizContainer/QuizContainer";

const CircleOfFifthsQuiz = () => {
  const [notes, setNotes] = useState([
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
  ]);
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

export default CircleOfFifthsQuiz;
