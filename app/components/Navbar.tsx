"use client";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { changeTheme } = useContext(ThemeContext);
  return (
    <div>
      <ul className="flex justify-between pt-5 items-center mr-4">
        <div className="flex gap-5 ml-auto">
          <button className="btn" onClick={() => changeTheme("light")}>
            Light
          </button>
          <button
            className="btn bg-gray-900 text-white"
            onClick={() => changeTheme("dark")}
          >
            Dark
          </button>
          <button
            className="btn btn-primary"
            onClick={() => changeTheme("winter")}
          >
            Winter
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => changeTheme("valentine")}
          >
            Valentine
          </button>
          <button
            className="btn btn-accent"
            onClick={() => changeTheme("retro")}
          >
            Retro
          </button>
          <button
            className="btn btn-neutral"
            onClick={() => changeTheme("aqua")}
          >
            Aqua 
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
