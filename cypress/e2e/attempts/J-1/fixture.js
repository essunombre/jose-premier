describe("TC FIxture use - login", () => 
{
    beforeEach("Visit the website", ()=>
    {
        cy.fixture("DOM/login.Page").then((the)=>
        {
            cy.login(
                the.username.data.valid,
                the.password.data.valid
            )
           
        })

    })
    it("TC1: Login with fitures suceeded", () => 
    {
        cy.fixture("DOM/login.Page").then((the)=>
        {
            cy.get(the.isSignedIn).should('contain', 'Jose  Albancando').should('be.visible');
            cy.get(the.isSignedIn).should('contain', 'jalbancando@premier.pr').should('be.visible');
           
        })
    
      })
})