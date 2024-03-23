import React from "react";
import Link from "next/link";

export enum siteLink {
  Home = "Home",
  Circles = "Circles",
  Modes = "Modes",
  Quizzes = "Quizzes",
}

const Home = () => {
  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
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
        <li className="mr-4" key={siteLink.Quizzes}>
          <Link
            href={`/${siteLink.Quizzes.toLowerCase()}`}
            className="link hover:text-secondary"
          >
            {siteLink.Quizzes}
          </Link>
        </li>
      </ul>
      <h1 className="text-4xl font-bold mt-8">Music Theor-ease</h1>
      <div className="mt-8 text-lg">
        Introduction to the pillars of music concepts
      </div>
    </div>
  );
};

export default Home;
