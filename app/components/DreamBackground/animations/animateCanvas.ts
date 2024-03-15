import Circle from "./shapes/Circle";

class AnimateCanvas {
  private animationFrameId = null;
  private circles = [];
  private lessRendersWidth = 800;
  private renderTotal = {
    normal: 150,
    less: 100,
  };

  constructor(private ctx) {
    if (!ctx) {
      throw new Error("CanvasRenderingContext2D is required");
    }
  }

  private animate() {
    const width = this.ctx.canvas.width;
    const height = this.ctx.canvas.height;

    this.ctx.clearRect(0, 0, width, height);
    this.circles.forEach((circle) => {
      circle.draw(this.ctx);
      circle.fall();
    });
    this.animationFrameId = requestAnimationFrame(() => this.animate());
  }

  private renderAmount(width) {
    return width > this.lessRendersWidth
      ? this.renderTotal.normal
      : this.renderTotal.less;
  }

  start() {
    const width = (this.ctx.canvas.width = window.innerWidth);
    const height = (this.ctx.canvas.height = window.innerHeight);
    const amountOfCircles = this.renderAmount(width);

    this.circles = Array.from({ length: amountOfCircles }, () =>
      Circle.createRandom(width, height)
    );
    window.addEventListener("resize", () => this.handleResize());
    this.animate();
  }

  stop() {
    window.removeEventListener("resize", () => this.handleResize());
    cancelAnimationFrame(this.animationFrameId!);
  }

  private handleResize() {
    const width = (this.ctx.canvas.width = window.innerWidth);
    const height = (this.ctx.canvas.height = window.innerHeight);

    this.circles.forEach((circle) => {
      circle.resize(width, height);
    });
  }
}

export default AnimateCanvas;
