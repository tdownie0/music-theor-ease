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

  it("should animate the circles", () => {
    cy.screenshot("before-animation");

    cy.wait(2000); 

    cy.screenshot("after-animation");

    // Compare screenshots
    cy.get("canvas").toMatchImageSnapshot({
      imageConfig: {
        threshold: 0.001,
      },
    });
  });
});
