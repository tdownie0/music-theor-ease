import React from "react";
import Link from "next/link";
import CircleOfNotes from "../components/CircleOfNotes";

const linkNames: string[] = ["Home", "Circles", "Modes"];

const Quiz: React.FC = () => {
  const renderLink = (linkName: string, index: number): JSX.Element => {
    if (index === 0) {
      return (
        <li className="mr-4" key={index}>
          <Link href="/" className="link hover:text-primary">
            {linkName}
          </Link>
        </li>
      );
    } else {
      return (
        <li className="mr-4" key={index}>
          <Link
            href={"/" + linkName.toLowerCase()}
            className="link hover:text-primary"
          >
            {linkName}
          </Link>
        </li>
      );
    }
  };

  return (
    <div className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        {linkNames.map(function renderLinks(linkName, index) {
          return renderLink(linkName, index);
        })}
      </ul>
    </div>
  );
};

export default Quiz;
