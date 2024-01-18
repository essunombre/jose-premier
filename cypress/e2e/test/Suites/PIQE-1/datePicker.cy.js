import QuoteEngine from "../../../../fixtures/pageObjects/QuoteEngine"
import Issue from "../../../../fixtures/pageObjects/Issue"
describe('Premier Test Suit', ()=> 
{
    const quoteEngine = new QuoteEngine()
    const issue = new Issue()
    beforeEach('Login', ()=>
    {
        cy.login(Cypress.env('user'), Cypress.env('password'))
    })

    //Play with Date Picer
    it.only('Testing Date Picker', () =>
    {
        
        cy.fixture("DOM/issue.Pap").then((the)=>
        {   
        //1. Quote Engine
            // quoteEngine.selectCommercialPolicy().click()
            // quoteEngine.getCurrentStep().should('have.text', '1Commercial Policy')
            quoteEngine.selectAgent().should("be.visible")
            quoteEngine.selectDealer().should("be.visible")
            quoteEngine.getOptionalDiscountInput().should("be.visible")
            
            quoteEngine.selectPersonalPolicy().click()
            quoteEngine.getCurrentStep().should('have.text', '1Policy')
            quoteEngine.selectAgent().select(the.agent.data.validDev)
            quoteEngine.selectDealer().select(the.dealer.data.validDev)
            // quoteEngine.fillOptionalDiscount(0.10)
            quoteEngine.getNextButton().click()
            //2. Driver - PersonalInformation form

            quoteEngine.selectBirthDate().should("be.visible")
            

              // Call the function to set the past date
              cy.setCustomDate(17, 'May', 1994);

        })

    })
})