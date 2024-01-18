import SignInPage from "../../../../fixtures/pageObjects/SignInPage"
import QuoteEngine from "../../../../fixtures/pageObjects/QuoteEngine"

//Aqui US es User story y el tituolo de la misma
describe("US # 1 : Login and Logout Successful", () =>
{
    const signInPage = new SignInPage()
    const quoteEngine = new QuoteEngine()
    beforeEach("Login", () => 
    {
        cy.fixture("DOM/login.Page").then((the) =>
        {
            cy.login(
                the.username.data.valid,
                the.password.data.valid,
            )
        })
    })
    //it is a test case, NO cucumnber!
    //El test case #1 hace referencai al primer test case 
    it("US # 1 | TC#1 Login Succesful", ()=> 
    {
        cy.fixture("DOM/login.Page").then((the) =>
        {
            cy.visit("https://premier-quote-frontend-qa.azurewebsites.net")
            quoteEngine.getQuoteEngineView()
                .should('be.visible')
            
        })
    })
    it("US # 1 | TC#2 User Name and Email", ()=> 
    {
        cy.fixture("DOM/login.Page").then((the) =>
        {
            cy.visit(the.qaLink)
            quoteEngine.verifyUser()
                .should('contain', 'Jose  Albancando')
                .should('be.visible');
                quoteEngine.verifyUser()
                .should('contain', 'jalbancando@premier.pr')    
                .should('be.visible');

        })
    })
    it("US # 1 | TC#3 Successful Logout", ()=> 
    {
        cy.fixture("DOM/login.Page").then((the) =>
        {
            cy.visit(the.qaLink)
            quoteEngine.logOutButton()
                .click()
            cy.url().should("contain", "premier")
            cy.wait(1000)
            signInPage.getWelcomeMessage() //for some reason is not finding it.
                .should('be.visible')
            signInPage.getEmailInput()
                .should('be.visible')
            signInPage.getPasswordInput()
                .should('be.visible')
        })
    })
})