"use client";
import React, { useState, useEffect } from "react";
import DreamBackground from "../DreamBackground/DreamBackground";
import ThemeButtons from "../ThemeButtons/ThemeButtons";
import styles from "./ThemeButtonsAnimation.module.css";

const ThemeButtonsAnimation = () => {
  const [canvasElement, setCanvasElement] = useState(null);
  const [canvasVisible, setCanvasVisible] = useState(false);

  const toggleCanvas = function displayCanvas() {
    if (!canvasElement) {
      createCanvas();
    }

    if (!canvasVisible) {
      setCanvasVisible(true);
    }
  };

  const createCanvas = function canvasSetup() {
    const canvas = document.createElement("canvas");
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.opacity = "0";
    setCanvasElement(canvas);
    document.body.appendChild(canvas);
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
  }, [canvasVisible, canvasElement]);

  return (
    <>
      <DreamBackground
        showCanvas={canvasVisible}
        canvasElement={canvasElement}
      />
      <ThemeButtons toggleCanvas={toggleCanvas} />
    </>
  );
};

export default ThemeButtonsAnimation;
