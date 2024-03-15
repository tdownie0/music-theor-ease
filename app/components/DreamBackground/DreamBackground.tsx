"use client";
import { useEffect } from "react";
import AnimateCanvas from "./animations/animateCanvas";

const DreamBackground = ({
  showCanvas,
  canvasElement,
}) => {
  useEffect(() => {
    if (!canvasElement) return;
    const ctx = canvasElement.getContext("2d");

    if (!ctx) return;
    let animateCanvas = null;

    // Simple error handling demo
    try {
      animateCanvas = new AnimateCanvas(ctx);
    } catch (error) {
      console.error("Error creating AnimateCanvas:", error);
    }

    if (animateCanvas) {
      showCanvas ? animateCanvas.start() : animateCanvas.stop();

      return () => {
        animateCanvas.stop();
      };
    }
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;
