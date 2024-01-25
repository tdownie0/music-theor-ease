"use client";
import React, { useEffect, useState } from "react";
import { Note, getCircleOfFifthsArrayAsync } from "../utils/musicLogic";

const sizeOfCircle: number = 150;
const radiusOfCircle: number = 100;
const placementRadius: number = radiusOfCircle + 20;
const degreesToRadians: number = Math.PI / 180;
let angleIncrement: number = 0;

const CircleOfFifths: React.FC = () => {
  const [circleOfFifthsArray, setCircleOfFifthsArray] = useState<Note[]>([]);

  useEffect(() => {
    // Fetch data asynchronously and update state
    const fetchData = async () => {
      const data = await getCircleOfFifthsArrayAsync();
      angleIncrement = 360 / data.length;
      setCircleOfFifthsArray(data);
    };

    fetchData();
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">
      <circle
        cx="150"
        cy="150"
        r="100"
        fill="#f0f0f0"
        stroke="#333"
        strokeWidth="2"
      />

      {/* Text labels for each key on the outer rim */}
      {circleOfFifthsArray.map((note, index) => {
        const angle = (index - 3) * angleIncrement * degreesToRadians;
        const x = sizeOfCircle + placementRadius * Math.cos(angle);
        const y = sizeOfCircle + placementRadius * Math.sin(angle);

        return (
          <text
            key={index}
            x={x}
            y={y}
            fill="text-primary"
            className="text-primary" // Use inline style with dynamic color class
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {note}
          </text>
        );
      })}
    </svg>
  );
};

export default CircleOfFifths;
