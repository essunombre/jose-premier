class SideBar
{
    getNewQuoteButton()
    {
        return cy.get('button[title="Go to New Quote"]')
    }

    getQuotesButton()
    {
        return cy.get('button[title="Go to Quotes"]')        
    }

    getPoliciesButton()
    {
        return cy.get('button[title="Go to Policies"]')        
    }

    getUsersButton()
    {
        return cy.get('button[title="Go to Users"]')        
    }

    getAgentsButton()
    {
        return cy.get('button[title="Go to Agents"]')        
    }

    getComissionsButton()
    {
        return cy.get('button[title="Go to Comissions"]')        
    }

    getDealersButton()
    {
        return cy.get('button[title="Go to Dealers"]')        
    }

    getBanksButton()
    {
        return cy.get('button[title="Go to Banks"]')
    }

    getLogOutButton()
    {
        return cy.get('div.ml-3 button')
    }
}

export default SideBar