"use client";
import React, { useEffect, useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { allNotes, getCircleOfFifthsNotes } from "../../utils/musicLogic";
import QuizTile from "./QuizTile/QuizTile";

const CircleQuiz = () => {
  const [originalNotes, setOriginalNotes] = useState<allNotes[]>([]);
  const [notes, setNotes] = useState<allNotes[]>([]);
  const [draggedTileIndex, setDraggedTileIndex] = useState<number | null>(null);

  function shuffleNotes(): number {
    return Math.random() - 0.5;
  }

  useEffect(() => {
    async function getCircleNotes(): Promise<void> {
      const data: allNotes[] = await getCircleOfFifthsNotes();
      setOriginalNotes(data);
      setNotes(data.slice().sort(() => shuffleNotes()));
    }
    getCircleNotes();
  }, []);

  const moveTile = (dragIndex: number, hoverIndex: number) => {
    const draggedTile = notes[dragIndex];
    const updatedNotes = [...notes];
    updatedNotes.splice(dragIndex, 1);
    updatedNotes.splice(hoverIndex, 0, draggedTile);
    setNotes(updatedNotes);
    setDraggedTileIndex(hoverIndex);
  };

  const checkOrder = (): void => {
    const isOrdered: boolean = notes.every(
      (note, index) => note === originalNotes[index]
    );
    if (isOrdered) {
      alert("Tiles are in order!");
    } else {
      alert("Tiles are not in order.");
    }
  };

  const resetNotes = () => {
    setNotes(originalNotes.slice().sort(() => shuffleNotes()));
    setTimeout(function removeLeftoverAnimations(): void {
      const elements: NodeListOf<Element> =
        document.querySelectorAll(".animate-bounce");
      elements.forEach((element) => {
        element.classList.remove("animate-bounce");
      }, 100);
    });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col w-full rounded-lg shadow-lg bg-base-300 gap-4 p-8">
        <div className="flex justify-end items-center">
          <div className="w-full">
            <p className="text-xl font-bold">Circle of Fifths:</p>
            <p className="text-xl font-medium">
              Arrange these tiles into the circle of fifths
            </p>
          </div>
          <button
            className="btn-secondary btn-circle btn w-1/5"
            onClick={resetNotes}
          >
            Shuffle
          </button>
        </div>
        <div className="flex flex-col w-full bg-secondary rounded-lg justify-center gap-4 p-8">
          <div className="flex bg-primary rounded-lg gap-4 p-2">
            {notes.slice(0, Math.ceil(notes.length / 2)).map((note, index) => (
              <div key={note} className="bg-accent rounded-md p-2">
                <QuizTile
                  key={note}
                  index={index}
                  note={note}
                  moveTile={moveTile}
                  isDragging={draggedTileIndex === index}
                />
              </div>
            ))}
          </div>
          <div className="flex bg-primary rounded-lg gap-4 p-2">
            {notes.slice(Math.ceil(notes.length / 2)).map((note, index) => (
              <div key={index} className="bg-accent rounded-md p-2">
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
          <button
            className="btn-primary btn-square btn w-1/5"
            onClick={checkOrder}
          >
            Check
          </button>
        </div>
      </div>
    </DndProvider>
  );
};

export default CircleQuiz;
