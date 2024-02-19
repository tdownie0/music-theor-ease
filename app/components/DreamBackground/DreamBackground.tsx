"use client";
import React, { useEffect } from "react";
import AnimateCanvas from "@/app/utils/animations/animateCanvas";

interface DreamBackgroundProps {
  showCanvas: boolean;
  canvasElement: HTMLCanvasElement | null;
}

const DreamBackground: React.FC<DreamBackgroundProps> = ({
  showCanvas,
  canvasElement,
}) => {
  useEffect(() => {
    if (canvasElement) {
      const ctx = canvasElement.getContext("2d");
      if (!ctx) return;

      const animateCanvas: AnimateCanvas = new AnimateCanvas(ctx);

      if (showCanvas) {
        animateCanvas.start();
      } else {
        animateCanvas.stop();
      }

      return () => {
        animateCanvas.stop();
      };
    }
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;
