"use client";
import { useState, useEffect } from "react";
import DreamBackground from "./DreamBackground";
import Navbar from "./Navbar";
import styles from "./NavbarAnimation.module.css";

const NavbarAnimation: React.FC = ({ children }) => {
  const [canvasElement, setCanvasElement] = useState<HTMLCanvasElement | null>(
    null
  );
  const [canvasVisible, setCanvasVisible] = useState(false);

  const toggleCanvas = function createCircleCanvas() {
    if (!canvasElement) {
      const canvas = setCanvas();
      document.body.appendChild(canvas);
    }

    if (!canvasVisible) {
      setCanvasVisible(true);
    }
  };

  const setCanvas = function setCanvasConfig() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.opacity = "0";
    setCanvasElement(canvas);
    return canvas;
  };

  useEffect(() => {
    if (canvasElement) {
      const handleAnimationEnd = () => {
        setCanvasVisible(false);
      };
      canvasElement.addEventListener("animationend", handleAnimationEnd);
      canvasElement.classList.toggle(styles["fade-in-out"], canvasVisible);
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
