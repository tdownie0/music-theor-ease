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

  fall(): void {
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

export default Circle;
