"use client";
import React, { useEffect, useState } from "react";
import { getCircleOfFifthsNotes } from "../../../utils/musicLogic";
import QuizContainer from "../../QuizContainer/QuizContainer";

const CircleOfFourthsQuiz = () => {
  const [notes, setNotes] = useState([]);
  const [originalNotes, setOriginalNotes] = useState([]);

  useEffect(() => {
    async function getCircleNotes() {
      const data = await getCircleOfFifthsNotes();
      setNotes([...data].reverse());
      setOriginalNotes([...data].reverse());
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
