"use client";
import React, { useEffect, useState } from "react";
import QuizContainer from "../../QuizContainer/QuizContainer";

const CircleOfFourthsQuiz = () => {
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

export default CircleOfFourthsQuiz;
