/// <reference types="cypress" />
describe("Premier Testi Suit"), () =>
{
    beforeEach("Precondicion: Admin debe hacer login", () =>
    {
        cy.visit('https://premier-quote-frontend-dev.azurewebsites.net/')
        cy.url().should('contain', 'premier')
        //login 
        cy.get('#username').type("jalbancando@premier.pr");
        cy.get('#password').type("Premier1*");
        cy.contains('form', 'Continue').find('[name="action"]').eq(2).click();
        cy.wait(2000);
    })
    it("Find and employee for x value", ()=>
    {
        cy.visit('https://premier-quote-frontend-dev.azurewebsites.net/policies')
    })
}