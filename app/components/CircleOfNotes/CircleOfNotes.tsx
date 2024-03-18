"use client";
import React, { useEffect, useState } from "react";
import { getCircleOfFifthsNotes } from "../../utils/musicLogic";

const containerWidth = 300;
const containerHeight = 300;
const circleCoordinateX = 150;
const circleCoordinateY = 150;
const circleRadius = 100;
const radiusOffset = circleRadius + 20;
const degreesToRadians = Math.PI / 180;
let angleIncrement = 0;

const CircleOfNotes = ({ circleType }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getCircleNotes() {
      try {
        const data = await getCircleOfFifthsNotes();
        angleIncrement = 360 / data.length;
        setNotes(() => {
          return circleType === "fourths" ? data.slice().reverse() : data;
        });
      } catch (error) {
        console.error("Error fetching circle of fifths notes:", error);
      }
    }
    // Fetch data asynchronously and update state
    getCircleNotes();
  }, [circleType]);

  function addCircleText(note, index) {
    const angle = (index - 3) * angleIncrement * degreesToRadians;
    const x = circleCoordinateX + radiusOffset * Math.cos(angle);
    const y = circleCoordinateY + radiusOffset * Math.sin(angle);

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
