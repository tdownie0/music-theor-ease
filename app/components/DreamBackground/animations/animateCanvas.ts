import Circle from "./shapes/Circle";

interface amountToRender {
  normal: number;
  less: number;
}

class AnimateCanvas {
  private animationFrameId: number | null = null;
  private circles: Circle[] = [];
  private lessCirclesSize: number = 800;
  private circleAmount: amountToRender = {
    normal: 150,
    less: 100,
  };

  constructor(private ctx: CanvasRenderingContext2D) {
    if (!ctx) {
      throw new Error('CanvasRenderingContext2D is required')
    }
  }

  private animate(): void {
    const width: number = this.ctx.canvas.width;
    const height: number = this.ctx.canvas.height;

    this.ctx.clearRect(0, 0, width, height);
    this.circles.forEach((circle) => {
      circle.draw(this.ctx);
      circle.fall();
    });
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private renderAmount(width: number): number {
    return width > this.lessCirclesSize
      ? this.circleAmount.normal
      : this.circleAmount.less;
  }

  start(): void {
    const width: number = (this.ctx.canvas.width = window.innerWidth);
    const height: number = (this.ctx.canvas.height = window.innerHeight);
    const amountOfCircles: number = this.renderAmount(width);

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
    const width: number = (this.ctx.canvas.width = window.innerWidth);
    const height: number = (this.ctx.canvas.height = window.innerHeight);

    this.circles.forEach((circle) => {
      circle.resize(width, height);
    });
  }
}

export default AnimateCanvas;
