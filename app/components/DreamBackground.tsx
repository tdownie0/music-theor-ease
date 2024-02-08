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
    const velocityMinimum = 1;
    const velocityMultiplier = 2;
    let width = (canvasElement.width = window.innerWidth);
    let height = (canvasElement.height = window.innerHeight);

    class Circle {
      constructor(
        public x: number,
        public y: number,
        public radius: number,
        public color: string,
        public velocity: number
      ) {}

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        this.y += this.velocity;
        this.x += Math.sin(this.y / 30) * 2;

        if (this.y - this.radius > height) {
          this.y = -this.radius;
          this.x = Math.random() * width;
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
      return new Circle(x, y, radius, color, velocity);
    }

    const circles: Circle[] = Array.from(
      { length: 200 },
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
