"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes, getCircleOfFifthsNotes } from "../../utils/musicLogic";
import QuizTile from "./QuizTile/QuizTile";

const CircleQuiz = () => {
  const [notes, setNotes] = useState<allNotes[]>([]);
  const [draggedTileIndex, setDraggedTileIndex] = useState<number | null>(null);

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
    setDraggedTileIndex(hoverIndex); // Update the index of the currently dragged tile
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col gap-4 rounded-lg shadow-lg bg-base-300 p-8 w-full">
        <div className="flex w-full justify-end items-center">
          <p className="text-xl font-medium w-full">
            Arrange into the circle of fifths
          </p>
          <button className="btn-secondary btn-circle btn w-1/5">Reset</button>
        </div>
        <div className="bg-secondary flex flex-col w-full justify-center gap-4 p-8 rounded-lg">
          <div className="flex gap-4 bg-primary p-2 rounded-lg">
            {notes.slice(0, Math.ceil(notes.length / 2)).map((note, index) => (
              <div className="bg-accent p-2 rounded-md">
                <QuizTile
                  key={index}
                  index={index}
                  note={note}
                  moveTile={moveTile}
                  isDragging={draggedTileIndex === index}
                />
              </div>
            ))}
          </div>
          <div className="flex gap-4 bg-primary p-2 rounded-lg">
            {notes.slice(Math.ceil(notes.length / 2)).map((note, index) => (
              <div className="bg-accent p-2 rounded-md">
                <QuizTile
                  key={index}
                  index={index + Math.ceil(notes.length / 2)}
                  note={note}
                  moveTile={moveTile}
                  isDragging={
                    draggedTileIndex === index + Math.ceil(notes.length / 2)
                  }
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-end">
          <button className="btn-primary btn-square btn w-1/5">Check</button>
        </div>
      </div>
    </DndProvider>
  );
};

export default CircleQuiz;
