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

  it("animates circles over time", () => {
    cy.wait(500);
    cy.compareSnapshot("dream-background-animating-start", .9);
  
    cy.wait(1000); 
    cy.compareSnapshot("dream-background-animating-mid", .9);
  
    cy.wait(1500); 
    cy.compareSnapshot("dream-background-animating-end", .9);
  });
  
});
