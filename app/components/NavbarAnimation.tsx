"use client";
import { useState, useEffect } from "react";
import DreamBackground from "./DreamBackground";
import Navbar from "./Navbar";

const NavbarAnimation: React.FC = ({ children }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );
  const [canvasVisible, setCanvasVisible] = useState(false);

  const toggleCanvas = () => {
    if (!canvasElement) {
      const canvas = document.createElement("canvas");
      setCanvasElement(canvas);
      document.body.appendChild(canvas);
    }

    if (!canvasVisible) {
      setCanvasVisible(true);
    }
  };

  useEffect(() => {
    if (canvasElement) {
      const handleAnimationEnd = () => {
        setCanvasVisible(false);
      };
      canvasElement.addEventListener("animationend", handleAnimationEnd);
      canvasElement.classList.toggle("fade-in-out", canvasVisible);
      return () => {
        canvasElement.removeEventListener("animationend", handleAnimationEnd);
      };
    }
  }, [canvasVisible]);

  return (
    <>
      <DreamBackground
        showCanvas={canvasVisible}
        canvasElement={canvasElement}
      />
      <Navbar toggleCanvas={toggleCanvas} />
      {children}
    </>
  );
};

export default NavbarAnimation;
