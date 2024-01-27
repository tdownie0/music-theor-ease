// DreamBackground.tsx
"use client";
import React, { useEffect } from "react";

const DreamBackground: React.FC<{ showCanvas: boolean; canvasElement: HTMLCanvasElement | null }> = ({ showCanvas, canvasElement }) => {
  useEffect(() => {
    let animationFrameId: number | null = null;
    const ctx = canvasElement?.getContext("2d");
    if (!ctx) return;

    const width = (canvasElement.width = window.innerWidth);
    const height = (canvasElement.height = window.innerHeight);

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

    const circles: Circle[] = [];
    const numCircles = 200;
    for (let i = 0; i < numCircles; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const radius = Math.random() * 20 + 5;
      const color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      const velocity = Math.random() * 2 + 1;
      circles.push(new Circle(x, y, radius, color, velocity));
    }

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
      canvasElement.width = window.innerWidth;
      canvasElement.height = window.innerHeight;
    });

    return () => {
      stopAnimation();
    };
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;

