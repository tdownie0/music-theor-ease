import DreamBackground from "./DreamBackground";

describe("DreamBackground component", () => {
  let canvas: HTMLCanvasElement;

  beforeEach(() => {
    canvas = document.createElement("canvas");
    canvas.setAttribute("data-testid", "dream-background");

    document.body.appendChild(canvas);

    cy.mount(<DreamBackground showCanvas={true} canvasElement={canvas} />);
  });

  it("should display the DreamBackground component", () => {
    cy.get('[data-testid="dream-background"]').should("be.visible");
  });

  it("populates random circles", () => {
    cy.wait(500);
    cy.compareSnapshot("dream-background-populating", .9);
  });
});
