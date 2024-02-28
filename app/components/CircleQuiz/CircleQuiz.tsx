"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes, getCircleOfFifthsNotes } from "../../utils/musicLogic";
import QuizTile from "./QuizTile/QuizTile";

const CircleQuiz = () => {
  const [notes, setNotes] = useState<allNotes[]>([]);

  useEffect(() => {
    async function getCircleNotes(): Promise<void> {
      const data: allNotes[] = await getCircleOfFifthsNotes();
      setNotes(data);
    }
    getCircleNotes();
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
        <QuizTile isDragging={false} note={notes[0]} />
    </DndProvider>
  );
};

export default CircleQuiz;
