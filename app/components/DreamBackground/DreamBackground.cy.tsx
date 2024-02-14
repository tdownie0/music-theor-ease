// cypress/integration/components/DreamBackground.spec.ts
import DreamBackground from "./DreamBackground";

describe('DreamBackground component', () => {
    let canvas: HTMLCanvasElement;

    beforeEach(() => {
        // Create a canvas element
        canvas = document.createElement("canvas");
        canvas.setAttribute('data-testid', 'dream-background');

        document.body.appendChild(canvas);

        // Mount the DreamBackground component with the canvas element
        cy.mount(<DreamBackground showCanvas={true} canvasElement={canvas} />);
    });

    it('should display the DreamBackground component', () => {
        // Assert that the DreamBackground component is visible on the page
        cy.get('[data-testid="dream-background"]').should('be.visible');
    });

    it('should animate the circles', () => {
        // Take screenshot before animation
        cy.screenshot('before-animation');
      
        // Wait for animation to complete
        cy.wait(2000); // Adjust wait time as needed
      
        // Take screenshot after animation
        cy.screenshot('after-animation');
      
        // Compare screenshots
        cy.get('canvas').toMatchImageSnapshot({
            imageConfig: {
                threshold: 0.001,
            },
        });
      });
});
