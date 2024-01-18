import QuoteEngine from "../../../../fixtures/pageObjects/QuoteEngine"
import Issue from "../../../../fixtures/pageObjects/Issue"
import ChecksType from "../../../../reference/checksType"
import PolicyType from "../../../../reference/policyType"
import CoverageType from "../../../../reference/coverageType"
import RoleType from "../../../../reference/roleType"
import EnvType from "../../../../reference/envType"

describe('Premier Testi Suit', () => 
{
    const quoteEngine = new QuoteEngine()
    const issue = new Issue()
    beforeEach("Login", ()=>
    {
        cy.fixture("DOM/issue.Pap").then((the)=>
        {
            cy.login(the.user.agent.email, the.user.agent.password)
        })
    })

    ////Create Quote
    it('Create a Full Cover Quote', () => {
        //1. Quote Engine
        cy.firstStep(EnvType.inQa, PolicyType.isPersonal, RoleType.isAgent)
        //2. Driver - PersonalInformation form
        cy.secondStep(PolicyType.isPersonal, ChecksType.hasAdditionalDriver)
        //3. Vehicle - Vehicle Information
        cy.thirdStep(PolicyType.isPersonal, RoleType.isAgent)

        //4. Summary
        //DOUBLE INTEREST -- isDoubleInterest -- No Leasing
        //LIABILITY       -- isLiability  
        //FULL COVER      -- isFullCover
        //XXD + LIABILITY   -- doublePlus     -- No LeasingXX
        cy.selectCoverageType(CoverageType.isLiability, RoleType.isAgent)
        // //Quote Created
        cy.isQuoteCreated()

        // cy.fillIssue(COVERAGE, ChecksType.isFinanced)
        // cy.fillIssue(COVERAGE, ChecksType.isLeasing)
        cy.fillIssue(CoverageType.isLiability)

        // //Quote Issued
        cy.isQuoteIssued()

        //Get Quote Number
        cy.getQuoteNumber()
    })    
})