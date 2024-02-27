"use client";
import React, { useEffect, useState } from "react";
import { allNotes, getCircleOfFifthsNotes } from "../../utils/musicLogic";

type CircleOfNotesProps = {
  circleType?: string;
};

const circleCoordinateX: number = 150;
const circleCoordinateY: number = 150;
const containerWidth: number = 300;
const containerHeight: number = 300;
const circleRadius: number = 100;
const radiusOffset: number = circleRadius + 20;
const degreesToRadians: number = Math.PI / 180;
let angleIncrement: number = 0;

const CircleOfNotes: React.FC<CircleOfNotesProps> = ({ circleType }) => {
  const [notes, setNotes] = useState<allNotes[]>([]);

  useEffect(() => {
    async function getCircleNotes(): Promise<void> {
      try {
        const data: allNotes[] = await getCircleOfFifthsNotes();
        angleIncrement = 360 / data.length;
        setNotes(function adjustForCircleType(): allNotes[] {
          return circleType === "fourths" ? data.slice().reverse() : data;
        });
      } catch (error) {
        console.error("Error fetching circle of fifths notes:", error);
      }
    }
    // Fetch data asynchronously and update state
    getCircleNotes();
  }, [circleType]);

  function addCircleText(note: string, index: number): React.JSX.Element {
    const angle: number = (index - 3) * angleIncrement * degreesToRadians;
    const x: number = circleCoordinateX + radiusOffset * Math.cos(angle);
    const y: number = circleCoordinateY + radiusOffset * Math.sin(angle);

    return (
      <text
        key={index}
        role="text"
        x={x}
        y={y}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {note}
      </text>
    );
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={containerWidth}
      height={containerHeight}
    >
      <circle
        cx={circleCoordinateX}
        cy={circleCoordinateY}
        r={circleRadius}
        fill="#f0f0f0"
        stroke="#333"
        strokeWidth="2"
      />

      {notes.map((note, index) => addCircleText(note, index))}
    </svg>
  );
};

export default CircleOfNotes;
