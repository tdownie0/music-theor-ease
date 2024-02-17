/// <reference types="cypress" />

context("Navigation Links", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("checks the navigation links work", () => {
    cy.get(".link").then((links) => {
      expect(links, "3 items").to.have.length(3);
    });

    cy.get(".link").eq(0).click();
    cy.url().should("include", "/circles");

    cy.get(".link").eq(1).click();
    cy.url().should("include", "/modes");

    cy.get(".link").eq(2).click();
    cy.url().should("include", "/quiz");
  });
});
