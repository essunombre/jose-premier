import SideBar from "./sideBar";

class Quotes
{
    getPolicyType()
    {
        return cy.get("[type='radio'][name='policyType']")
    }

    selectAllPolicies()
    {
        return cy.get("[type='radio'][name='policyType'][value='0']")
    }

    selectPersonalPolicy()
    {
        return cy.get("[type='radio'][name='policyType'][value='1']")
    }

    selectCommercialPolicy()
    {
        return cy.get("[type='radio'][name='policyType'][value='2']")
    }

    getCoverageType()
    {
        return cy.get("[type=radio][name='coverageType']")
    }

    selectAllCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='0']")
    }

    selectDoubleInterestCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='1']")
    }

    selectLiabilityCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='2']")
    }

    selectDoubleInterestLiabilityCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='3']")
    }

    selectFullCoverCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='4']")
    }

    selectCommercialLiabilityCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='5']")
    }

    selectCommercialFullCoverCoverage()
    {
        return cy.get("[type='radio'][name='coverageType'][value='6']")
    }

    getCreateQuoteButton()
    {
        return cy.contains('button', 'Create quote').click()
    }
}

export default Quotes