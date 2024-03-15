"use client";
import React, { useEffect, useState } from "react";
import { getCircleOfFifthsNotes } from "../../../utils/musicLogic";
import QuizContainer from "../../QuizContainer/QuizContainer";

const CircleOfFifthsQuiz = () => {
  const [notes, setNotes] = useState([]);
  const [originalNotes, setOriginalNotes] = useState([]);

  useEffect(() => {
    async function getCircleNotes() {
      const data = await getCircleOfFifthsNotes();
      setNotes(data);
      setOriginalNotes(data);
    }
    getCircleNotes();
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
