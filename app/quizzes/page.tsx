"use client";
import React, { useState, useEffect } from "react";
import NavigationLinks from "../components/NavigationLinks/NavigationLinks";
import { siteLink } from "../utils/enums";
import CircleOfFifthsQuiz from "../components/CircleQuiz/CircleOfFifths/CircleOfFifthsQuiz";
import CircleOfFourthsQuiz from "../components/CircleQuiz/CircleOfFourths/CircleOfFourths";
import ModesQuiz from "../components/ModesQuiz/ModesQuiz";

const Quizzes: React.FC = () => {
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
      <NavigationLinks linkType={siteLink.Quizzes} />
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
