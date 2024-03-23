"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

enum siteLink {
  Home = "Home",
  Circles = "Circles",
  Modes = "Modes",
  Quizzes = "Quizzes",
}

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

const Circles = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4" key={siteLink.Home}>
          <Link href={"/"} className="link hover:text-primary">
            {siteLink.Home}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Modes}>
          <Link
            href={`/${siteLink.Modes.toLowerCase()}`}
            className="link hover:text-secondary"
          >
            {siteLink.Modes}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Quizzes}>
          <Link
            href={`/${siteLink.Quizzes.toLowerCase()}`}
            className="link hover:text-accent"
          >
            {siteLink.Quizzes}
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl font-semibold mt-8 mb-8">Circles</h1>
      <div className="hero flex flex-col">
        <div className="hero-content flex-col">
          <h2 className="text-5xl mb-8">Circle of Fifths</h2>
          <p className="mb-4">
            The circle of fifths is a fundamental concept in music theory,
            providing a visual representation of the relationships between the
            12 tones of the chromatic scale. Arranged in a circular fashion,
            each adjacent key on the circle is a perfect fifth apart. Starting
            from any key, moving clockwise adds a sharp to the key signature,
            while moving counterclockwise adds a flat. This progression follows
            the order of sharps or flats commonly found in key signatures. The
            circle of fifths is a valuable tool for musicians, helping them
            understand key relationships, chord progressions, and modulation in
            music. It is particularly useful for composers, songwriters, and
            performers in navigating the complexities of musical harmony.
          </p>
          <CircleOfNotes />
        </div>

        <div className="border-t border-gray-300 w-full mt-8 mr-4"></div>
        <div className="hero-content flex-col">
          <h2 className="text-5xl mt-8 mb-8">Circle of Fourths</h2>
          <p className="mb-4">
            The circle of fourths is a conceptual framework in music theory that
            presents the relationship between musical keys in a reverse order
            compared to the more commonly known circle of fifths. In the circle
            of fourths, each key is arranged counterclockwise, with each
            adjacent key being a perfect fourth apart. This reverse arrangement
            mirrors the circle of fifths, where keys are organized clockwise in
            perfect fifths. Just as the circle of fifths is a tool for
            understanding key relationships and chord progressions, the circle
            of fourths provides a complementary perspective, showcasing the
            inverse progression of musical keys. Musicians often use both the
            circle of fifths and the circle of fourths to navigate and
            comprehend the intricate connections within the chromatic scale,
            enhancing their understanding of harmony and modulation in music
            composition and performance.
          </p>
          <CircleOfNotes circleType="fourths" />
        </div>
      </div>
    </div>
  );
};

export default Circles;
