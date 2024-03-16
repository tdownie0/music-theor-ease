"use client";
import React, { useState, useEffect } from "react";
import { siteLink } from "../utils/enums";
import CircleOfFifthsQuiz from "../components/CircleQuiz/CircleOfFifths/CircleOfFifthsQuiz";
import CircleOfFourthsQuiz from "../components/CircleQuiz/CircleOfFourths/CircleOfFourths";
import ModesQuiz from "../components/ModesQuiz/ModesQuiz";
import Link from "next/link";

const Quizzes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  const fadeStyles = {
    opacity: isLoading ? 0 : 1,
    transition: "opacity .7s ease-in-out",
  };

  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4" key={siteLink.Home}>
          <Link href={"/"} className="link hover:text-primary">
            {siteLink.Home}
          </Link>
        </li>
        <li className="mr-4" key={siteLink.Circles}>
          <Link
            href={`/${siteLink.Circles.toLowerCase()}`}
            className="link hover:text-accent"
          >
            {siteLink.Circles}
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
      </ul>
      <h1 className="text-4xl font-semibold mt-8 mb-8">Quizzes</h1>
      <div className="hero flex flex-col">
        <div className="hero-content flex-col">
          <div style={fadeStyles} className="flex flex-col gap-8">
            <CircleOfFifthsQuiz />
            <CircleOfFourthsQuiz />
            <ModesQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
