//2160 Commercial	Light (0 - 10,000 lbs)	No	40000	00986	101	Food Delivery	Frozen Food	031	33

/// <reference types="cypress" />
describe("Table Interaction", () => {
    //Attempt for login
    ////Create Quote
    it.only("Verifying frontend policies payment", () => {
      cy.visit("/");
  
      cy.origin("https://premierpr.us.auth0.com", () => {
        cy.contains("form", "Email address")
          .find('[inputmode="email"]')
          .type("jalbancando@premier.pr");
        // cy.contains('form', 'Password').find('#password').click();
        cy.contains("form", "Password").find("#password").type("Premier1*");
        // cy.get('[type="submit"]');a
        cy.contains("form", "Continue").find('[name="action"]').eq(1).click();
        cy.wait(2000);
      });

    //go to Policies
    cy.get('button[title="Go to Policies"]').click();

    cy.get("tr td:nth-child(2)").each(($element, index) => {
        const text = $element.text();
        if (text.includes("Hector Fuentes Cruz")) {
          cy.get("tr td:nth-child(2)")
            .eq(index)
            .next()
            .then(function (effectiveDate) {
              const effectiveDateText = effectiveDate.text();
              expect(effectiveDate).to.equal("Dec 17 2022");
            });
        }
      });


  });
});



