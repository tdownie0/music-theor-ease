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
      setNotes(
        data.slice().sort(function shuffleNotes(): number {
          return Math.random() - 0.5;
        })
      );
    }
    getCircleNotes();
  }, []);

  const moveTile = (dragIndex: number, hoverIndex: number) => {
    const draggedTile = notes[dragIndex];
    const updatedNotes = [...notes];
    updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, draggedTile);
    setNotes(updatedNotes);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4">
        <div className="flex w-full justify-center gap-1">
          {notes.slice(0, Math.ceil(notes.length / 2)).map((note, index) => (
            <QuizTile key={index} index={index} note={note} moveTile={moveTile} />
          ))}
        </div>
        {/* Second row of QuizTiles */}
        <div className="flex w-full justify-center gap-1">
          {notes.slice(Math.ceil(notes.length / 2)).map((note, index) => (
            <QuizTile key={index} index={index} note={note} moveTile={moveTile} />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default CircleQuiz;
