// DreamBackground.tsx
"use client";
import React, { useEffect } from "react";

const DreamBackground: React.FC<{
  showCanvas: boolean;
  canvasElement: HTMLCanvasElement | null;
}> = ({ showCanvas, canvasElement }) => {
  useEffect(() => {
    let animationFrameId: number | null = null;
    const ctx = canvasElement?.getContext("2d");
    if (!ctx) return;

    const colorRange: number = 255;
    const radiusMinimum = 5;
    const radiusMultiplier = 20;
    const velocityMinimum = 0.01;
    const velocityMultiplier = 0.001;
    const amplitudeMinimum = 50;
    const amplitudeMultiplier = 10;
    const frequencyMinimum = 0.3;
    const frequencyMultiplier = 0.1;
    let width = (canvasElement.width = window.innerWidth);
    let height = (canvasElement.height = window.innerHeight);

    class Circle {
      constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string,
        public velocity: number,
        public frequency: number,
        public amplitude: number
      ) {}

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y + 100, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Adjust the x position linearly
        this.x += this.velocity;
        
        // Calculate the y position with a bend in the middle
        const fourthHeight = height / 5;
        const bendFactor = 1; // Adjust this value to control the intensity of the bend
        const bendOffset = -bendFactor * Math.sin(this.x / (width / 2)) * fourthHeight;
        this.y = fourthHeight + Math.sin(this.x / this.frequency) * this.amplitude + bendOffset;
        
        // Reset the position if the circle goes off-screen
        if (this.x - this.radius > width) {
          this.x = -this.radius;
          this.y = Math.random() * height;
        }
      }
      
    }

    function createRandomCircle(width: number, height: number): Circle {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * radiusMultiplier + radiusMinimum;
      const color = `rgb(${Math.random() * colorRange}, ${
        Math.random() * colorRange
      }, ${Math.random() * colorRange})`;
      const velocity = Math.random() * velocityMultiplier + velocityMinimum;
      const frequency = Math.random() * frequencyMultiplier + frequencyMinimum;
      const amplitude = Math.random() * amplitudeMultiplier + amplitudeMinimum;
      return new Circle(x, y, radius, color, velocity, frequency, amplitude);
    }

    const circles: Circle[] = Array.from(
      { length: 60 },
      function circleFactory() {
        return createRandomCircle(width, height);
      }
    );

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      circles.forEach((circle) => {
        circle.draw();
        circle.update();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    const startAnimation = () => {
      animationFrameId = requestAnimationFrame(animate);
    };

    const stopAnimation = () => {
      cancelAnimationFrame(animationFrameId!);
    };

    if (showCanvas) {
      startAnimation();
    } else {
      stopAnimation();
    }
    window.addEventListener("resize", () => {
      // Update the canvas dimensions
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;

      // Recalculate circle positions and sizes based on new canvas dimensions
      width = canvasElement.width;
      height = canvasElement.height;
      circles.forEach((circle) => {
        circle.x *= canvasElement.width / width;
        circle.y *= canvasElement.height / height;
        circle.radius *=
          (canvasElement.width / width + canvasElement.height / height) / 2;
      });
    });

    return () => {
      stopAnimation();
    };
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;
