describe('TC Hard code - login', () =>
{
    beforeEach("Visit the website", ()=> 
    {
        cy.visit("/")
        cy.url().should("contain", "premier")
        
    })
    it("TC1: Login succeed", () => 
    {
        cy.origin('https://premierpr.us.auth0.com', () =>
        {
            cy.contains("Welcome").should('be.visible')
            cy.get('#username')//Username
                .type("jalbancando@premier.pr") 
            cy.get('#password')//Password
                .type("Premier1*") 
                cy.get('button[data-action-button-primary="true"]')//login Button
                .click()
        })
        cy.get('.mantine-emotion-cache-Text-root').should('contain', 'Jose  Albancando').should('be.visible');
        cy.get('.mantine-emotion-cache-Text-root').should('contain', 'jalbancando@premier.pr').should('be.visible');
    
      })
})