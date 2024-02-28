import React from "react";
import NavigationLinks from "../components/NavigationLinks/NavigationLinks";
import { siteLinks } from "../utils/enums";
import CircleQuiz from "../components/CircleQuiz/CircleQuiz";

const Quizzes: React.FC = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <NavigationLinks linkType={siteLinks.Quizzes} />
      <h1 className="text-4xl font-semibold mt-8 mb-8">Quizzes</h1>
      <div className="hero flex flex-col">
        <div className="hero-content flex-col">
          <h2 className="text-5xl mb-8">Circles</h2>
          <div>
            <CircleQuiz />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quizzes;
