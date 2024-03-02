"use client";
import React, { useEffect, useState } from "react";
import { allNotes, getCircleOfFifthsNotes } from "../../../utils/musicLogic";
import QuizContainer from "../../QuizContainer/QuizContainer/QuizContainer";

const CircleOfFourthsQuiz = () => {
  const [notes, setNotes] = useState<allNotes[] | string[]>([]);
  const [originalNotes, setOriginalNotes] = useState<allNotes[] | string[]>([]);

  useEffect(() => {
    async function getCircleNotes(): Promise<void> {
      const data: allNotes[] = await getCircleOfFifthsNotes();
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
      description="Arrange these tiles into the circle of fourths"
    />
  );
};

export default CircleOfFourthsQuiz;
