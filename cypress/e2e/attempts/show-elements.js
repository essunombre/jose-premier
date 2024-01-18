/// <reference types="cypress" />
describe("Premier Testi Suit", () => {
  ////Show Expected elements
  it.only("show expected elements", () => {
    cy.visit("/");

    cy.origin("https://premierpr.us.auth0.com", () => {
      cy.get("#username").type("jalbancando@premier.pr");
      cy.get("#password").type("Premier1*");
      cy.contains("form", "Continue").find('[name="action"]').eq(2).click();
      cy.wait(2000);
    });

    //Verify User
    cy.get(".mantine-emotion-cache-1fazq8z") // You may need to adjust the selector
      .should("be.visible"); // Ensure the element is visible

    const selectors = [
      "nav",
      'button[title="Go to New Quote"]',
      'button[title="Go to Quotes"]',
      'button[title="Go to Policies"]',
      'button[title="Go to Users"]',
      'button[title="Go to Agents"]',
      'button[title="Go to Commissions"]',
      'button[title="Go to Dealers"]',
      'button[title="Go to Banks"]',
      'div[title="Logout"] button',
    ];
    selectors.forEach((selector) => {
      cy.get(selector).should("be.visible");
    });

    cy.get('.mantine-emotion-cache-Text-root').should('contain', 'Jose  Albancando').should('be.visible');
    cy.get('.mantine-emotion-cache-Text-root').should('contain', 'jalbancando@premier.pr').should('be.visible');
    
  });
});
