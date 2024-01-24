import React from "react";
import Link from "next/link";
import CircleOfFifths from "../components/CircleOfFifths";

const Circles = () => {
  return (
    <main className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/" className="link hover:text-primary">
            Home
          </Link>
        </li>
        <li>
          <Link href="/modes" className="link hover:text-accent">
            Modes
          </Link>
        </li>
      </ul>
      <div className="text-4xl font-semibold mt-8">Circles</div>
      <div>
        <CircleOfFifths />
      </div>
    </main>
  );
};

export default Circles;
