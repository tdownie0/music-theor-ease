"use client";
import React, { useEffect } from "react";

class Circle {
  private static readonly colorRange: number = 255;
  private static readonly radiusMinimum: number = 5;
  private static readonly radiusMultiplier: number = 20;
  private static readonly velocityMinimum: number = 1;
  private static readonly velocityMultiplier: number = 2;

  constructor(
    private x: number,
    private y: number,
    private radius: number,
    private color: string,
    private velocity: number,
    private width: number,
    private height: number
  ) {}

  draw(ctx: CanvasRenderingContext2D): void {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update(): void {
    this.y += this.velocity;
    this.x += Math.sin(this.y / 30) * 2;

    if (this.y - this.radius > this.height) {
      this.y = -this.radius;
      this.x = Math.random() * this.width;
    }
  }

  static createRandom(width: number, height: number): Circle {
    const x: number = Math.random() * width;
    const y: number = Math.random() * height;
    const radius: number =
      Math.random() * this.radiusMultiplier + this.radiusMinimum;
    const color: string = `rgb(${Math.random() * this.colorRange}, ${
      Math.random() * this.colorRange
    }, ${Math.random() * this.colorRange})`;
    const velocity: number =
      Math.random() * this.velocityMultiplier + this.velocityMinimum;
    return new Circle(x, y, radius, color, velocity, width, height);
  }

  resize(width: number, height: number): void {
    this.x *= width / this.width;
    this.y *= height / this.height;
    this.radius *= Math.min(width, height) / Math.min(this.width, this.height);
    this.width = width;
    this.height = height;
  }
}

class AnimateCanvas {
  private animationFrameId: number | null = null;
  private circles: Circle[] = [];

  constructor(private ctx: CanvasRenderingContext2D) {}

  private animate(): void {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;

    this.ctx.clearRect(0, 0, width, height);
    this.circles.forEach((circle) => {
      circle.draw(this.ctx);
      circle.update();
    });
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  start(): void {
    const width = (this.ctx.canvas.width = window.innerWidth);
    const height = (this.ctx.canvas.height = window.innerHeight);
    const amountOfCircles = width > 800 ? 150 : 100;

    this.circles = Array.from({ length: amountOfCircles }, () =>
      Circle.createRandom(width, height)
    );
    window.addEventListener("resize", () => this.handleResize());
    this.animate();
  }

  stop(): void {
    window.removeEventListener("resize", () => this.handleResize());
    cancelAnimationFrame(this.animationFrameId!);
  }

  private handleResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.ctx.canvas.width = width;
    this.ctx.canvas.height = height;

    this.circles.forEach((circle) => {
      circle.resize(width, height);
    });
  }
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
      const ctx = canvasElement.getContext("2d");
      if (!ctx) return;

      const animateCanvas = new AnimateCanvas(ctx);

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
