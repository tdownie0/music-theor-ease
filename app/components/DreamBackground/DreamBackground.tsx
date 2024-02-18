"use client";
import React, { useEffect } from "react";

const colorRange: number = 255;
const radiusMinimum = 5;
const radiusMultiplier = 20;
const velocityMinimum = 1;
const velocityMultiplier = 2;

class Circle {
  constructor(
    public x: number,
    public y: number,
    public radius: number,
    public color: string,
    public velocity: number,
    public ctx: CanvasRenderingContext2D
  ) {}

  draw(): void {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }

  update(width: number, height: number): void {
    this.y += this.velocity;
    this.x += Math.sin(this.y / 30) * 2;

    if (this.y - this.radius > height) {
      this.y = -this.radius;
      this.x = Math.random() * width;
    }
  }
}

function createRandomCircle(
  width: number,
  height: number,
  ctx: CanvasRenderingContext2D
): Circle {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const radius = Math.random() * radiusMultiplier + radiusMinimum;
  const color = `rgb(${Math.random() * colorRange}, ${
    Math.random() * colorRange
  }, ${Math.random() * colorRange})`;
  const velocity = Math.random() * velocityMultiplier + velocityMinimum;
  return new Circle(x, y, radius, color, velocity, ctx);
}

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
      let animationFrameId: number | null = null;
      const ctx = canvasElement?.getContext("2d");
      if (!ctx) return;

      let width = (canvasElement.width = window.innerWidth);
      let height = (canvasElement.height = window.innerHeight);

      const circles: Circle[] = Array.from(
        { length: 200 },
        function circleFactory() {
          return createRandomCircle(width, height, ctx);
        }
      );

      const animate = function run(): void {
        ctx.clearRect(0, 0, width, height);
        circles.forEach((circle) => {
          circle.draw();
          circle.update(width, height);
        });
        animationFrameId = requestAnimationFrame(animate);
      };

      const startAnimation = function start(): void {
        animationFrameId = requestAnimationFrame(animate);
      };

      const stopAnimation = function stop(): void {
        cancelAnimationFrame(animationFrameId!);
      };

      if (showCanvas) {
        startAnimation();
      } else {
        stopAnimation();
      }

      const handleResize = function listenForResize(): void {
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
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        stopAnimation();
      };
    }
  }, [showCanvas, canvasElement]);

  return null; // No need to render anything, canvas is managed by useEffect
};

export default DreamBackground;
