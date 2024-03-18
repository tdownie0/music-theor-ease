"use client";
import React, { useEffect, useState } from "react";

const containerWidth = 300;
const containerHeight = 300;
const circleCoordinateX = 150;
const circleCoordinateY = 150;
const circleRadius = 100;
const radiusOffset = circleRadius + 20;
const degreesToRadians = Math.PI / 180;
let angleIncrement = 0;

const CircleOfNotes = ({ circleType }) => {
  const [notes, setNotes] = useState([
    "C",
    "G",
    "D",
    "A",
    "E",
    "B",
    "F#",
    "Db",
    "Ab",
    "Eb",
    "Bb",
    "F",
  ]);

  useEffect(() => {
    function getCircleNotes() {
      angleIncrement = 360 / notes.length;
      setNotes(() => {
        return circleType === "fourths"
          ? notes.slice().reverse()
          : notes.slice();
      });
    }
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
