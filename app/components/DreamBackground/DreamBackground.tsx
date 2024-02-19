"use client";
import React, { useEffect } from "react";
import AnimateCanvas from "./animations/animateCanvas";

interface DreamBackgroundProps {
  showCanvas: boolean;
  canvasElement: HTMLCanvasElement | null;
}

const DreamBackground: React.FC<DreamBackgroundProps> = ({
  showCanvas,
  canvasElement,
}) => {
  useEffect(() => {
    if (!canvasElement) return;
    const ctx = canvasElement.getContext("2d");

    if (!ctx) return;
    let animateCanvas: AnimateCanvas | null = null;

    // Simple error handling demo
    try {
      animateCanvas = new AnimateCanvas(ctx);
    } catch (error) {
      console.error("Error creating AnimateCanvas:", error);
    }

    if (animateCanvas) {
      showCanvas ? animateCanvas.start() : animateCanvas.stop()
      
      return () => {
        animateCanvas.stop();
      };
    }
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;
