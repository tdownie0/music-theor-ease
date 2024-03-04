"use client";
import React, { useEffect, useState } from "react";
import { allNotes, getCircleOfFifthsNotes } from "../../../utils/musicLogic";
import QuizContainer from "../../QuizContainer/QuizContainer/QuizContainer";

const CircleOfFifthsQuiz = () => {
  const [notes, setNotes] = useState<allNotes[] | string[]>([]);
  const [originalNotes, setOriginalNotes] = useState<allNotes[] | string[]>([]);

  useEffect(() => {
    async function getCircleNotes(): Promise<void> {
      const data: allNotes[] = await getCircleOfFifthsNotes();
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
      description="Arrange these tiles into the circle of fifths"
    />
  );
};

export default CircleOfFifthsQuiz;
