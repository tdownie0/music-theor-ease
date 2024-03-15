class Circle {
  private static readonly colorRange = 255;
  private static readonly radiusMinimum = 5;
  private static readonly radiusMultiplier = 20;
  private static readonly velocityMinimum = 1;
  private static readonly velocityMultiplier = 2;

  constructor(
    private x,
    private y,
    private radius,
    private color,
    private velocity,
    private width,
    private height
  ) {}

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  fall() {
    this.y += this.velocity;
    this.x += Math.sin(this.y / 30) * 2;

    if (this.y - this.radius > this.height) {
      this.y = -this.radius;
      this.x = Math.random() * this.width;
    }
  }

  static createRandom(width, height) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    const radius = Math.random() * this.radiusMultiplier + this.radiusMinimum;
    const color = `rgb(${Math.random() * this.colorRange}, ${
      Math.random() * this.colorRange
    }, ${Math.random() * this.colorRange})`;
    const velocity =
      Math.random() * this.velocityMultiplier + this.velocityMinimum;
    return new Circle(x, y, radius, color, velocity, width, height);
  }

  resize(width, height) {
    this.x *= width / this.width;
    this.y *= height / this.height;
    this.radius *= Math.min(width, height) / Math.min(this.width, this.height);
    this.width = width;
    this.height = height;
  }
}

export default Circle;
