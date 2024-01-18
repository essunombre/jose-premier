import QuoteEngine from "../../../../fixtures/pageObjects/QuoteEngine"
import Issue from "../../../../fixtures/pageObjects/Issue"
import ChecksType from "../../../../reference/checksType"
import PolicyType from "../../../../reference/policyType"
import CoverageType from "../../../../reference/coverageType"

describe('Premier Testi Suit', () => 
{
    const quoteEngine = new QuoteEngine()
    const issue = new Issue()
    beforeEach("Login", ()=>
    {
        cy.login(Cypress.env('user'), Cypress.env('password'))
    })

    ////Create Quote
    it('Create a Full Cover Quote', () => {
        cy.fixture("DOM/issue.Pap").then((the)=>
        {
            //1. Quote Engine
            cy.firstStep('qa', PolicyType.isPersonal)
            //2. Driver - PersonalInformation form
            cy.secondStep(PolicyType.isPersonal)
            //3. Vehicle - Vehicle Information
            cy.thirdStep(PolicyType.isPersonal)

            //4. Summary
            //DOUBLE INTEREST -- isDoubleInterest -- No Leasing
            //LIABILITY       -- isLiability  
            //FULL COVER      -- isFullCover
            //XXD + LIABILITY   -- doublePlus     -- No LeasingXX
            cy.selectCoverageType(CoverageType.isDoubleInterest)
            // //Quote Created
            cy.isQuoteCreated()

            // cy.fillIssue(COVERAGE, ChecksType.isFinanced)
            // cy.fillIssue(COVERAGE, ChecksType.isLeasing)
            cy.fillIssue(CoverageType.isDoubleInterest)

            // //Quote Issued
            cy.isQuoteIssued()       
            cy.pause()
         
        })        
    })    
})