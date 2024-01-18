/// <reference types="cypress" />

describe("Premier Testi Suit", () => {
  it("Basic login", () => {
    cy.visit("/");

    cy.origin("https://premierpr.us.auth0.com", () => {

    const emailAddress = ''
      cy.get("#username").type(user);
      cy.get("#password").type("Premier1*");
      cy.contains("form", "Continue").find('[name="action"]').eq(1).click();
    });

    cy.get(".mantine-emotion-cache-1fazq8z")
      .should("be.visible")
      .should("contain", "jalbancando@premier.pr"); // Check if it contains the expected email address
  });
});
