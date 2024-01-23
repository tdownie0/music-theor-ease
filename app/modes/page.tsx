import React from "react";
import Link from "next/link";

const Modes = () => {
  return (
    <main className="primary min-h-screen mt-16 ml-4">
      <ul className="flex">
        <li className="mr-4">
          <Link href="/" className="link hover:text-primary">Home</Link>
        </li>
        <li>
          <Link href="/circles" className="link hover:text-accent">Circles</Link>
        </li>
      </ul>
      <div className="text-4xl font-semibold mt-8">Modes</div>
    </main>
  );
};

export default Modes;
