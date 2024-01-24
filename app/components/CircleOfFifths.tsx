'use client'
import React, { useEffect, useState } from "react";
import { Note, getCircleOfFifthsArrayAsync } from "../utils/musicLogic";

const CircleOfFifths: React.FC = () => {
    const [circleOfFifthsArray, setCircleOfFifthsArray] = useState<Note[]>([]);

  useEffect(() => {
    // Fetch data asynchronously and update state
    const fetchData = async () => {
      const data = await getCircleOfFifthsArrayAsync();
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
      {circleOfFifthsArray.map(
        (note, index) => {
          const angle = (index - 3) * (360 / 12) * (Math.PI / 180);
          const x = 150 + 120 * Math.cos(angle);
          const y = 150 + 120 * Math.sin(angle);

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
        }
      )}
    </svg>
  );
};

export default CircleOfFifths;
