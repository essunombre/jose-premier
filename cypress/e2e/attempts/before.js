describe("Premier Testi Suit", () => {
    let data;
  
    before(() => {
      // Load data from the "example.json" fixture file
      cy.fixture("example.json").then((fData) => {
        data = fData;
      });
    });
  
    it.only("show expected elements", () => {
      cy.visit("/");
        const sentArgs = {
          username: data.admin.email,
          password: data.admin.password,
        };

        cy.origin("https://premierpr.us.auth0.com", { args: sentArgs }, ({ username, password }) => {
          // Inside the origin callback, baseUrl is 'https://premierpr.us.auth0.com'
  
            cy.get("#username").type(username);
            cy.get("#password").type(password);
            cy.contains("form", "Continue").find('[name="action"]').eq(1).click();
            cy.wait(2000);
        });
    });
  });
  