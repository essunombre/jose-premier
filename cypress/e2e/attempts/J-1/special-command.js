describe('I am not sure yet', () =>
{
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
    it('Selecting PAP options', () =>
    {
        cy.visit("https://premier-quote-frontend-qa.azurewebsites.net/policies")

        // cy.get("tr td:nth-child(1)").each((policyName, index)  =>
        // {
        //     const text = policyName.text()
        //     if(text.includes("PAP-0000535-00"))
        //     {
        //         cy.get("tr td:nth-child(1)").eq(index).next().then(function(name)
        //         {
        //             const nameText = name.text()
        //             expect(nameText).to.equal('Bernardino Rodriguez Santiago');

        //         })
        //     }

        // })
        cy.openPapOptions()
        cy.searchByInfo("name", "Ramon Ruibal")
        cy.wait(2000)
        cy.get("tr td:nth-child(1)").each((policyName, index) => 
        {
            const text = policyName.text()
        
            if (text.includes("PAP-0000541-00")) 
            {
                cy.get("tr td:nth-child(1)").eq(index)
                    .next().then(function (name) 
                {
                    const nameText = name.text()
                    expect(nameText).to.equal('Ramon Ruibal Robles')
                }).next().then(function (date) 
                {
                    const dateText = date.text()
                    expect(dateText).to.equal('Dec 29 2022')
                }).next().then(function (coverage) 
                {
                    const coverageText = coverage.text()
                    expect(coverageText).to.equal('Full Cover')
                }).next().then(function (status)
                {
                    const statusText = status.text()
                    expect(statusText).to.equal('Cancelled')
                }).next().then(function(price)
                {
                    const priceText = price.text()
                    expect(priceText).to.equal("$1,314")
                }).next().then(function(payment)
                {
                    const paymentText = payment.text()
                    expect(paymentText).to.equal("Refund")
                }).next().then(function(papOptions)
                {
                    const papText = papOptions.text()
                    expect(papText).to.equal("PAP Options")
                })
    
                //I am putting this because somehow it continues
                return false;
            }
        })

        cy.openPapOptions("PAP-0000541-00")

        // cy.get("tbody td:nth-child(2)")
        // cy.get('.mantine-emotion-cache-Table-root').find('[title="View policy details"]').each(($policy) =>{

        //     const textPolicy = $policy.find('span').text().trim();
        //     cy.log(textPolicy);
        //     if (textPolicy.includes('PAP-0000522-01'))
        //     {
        //         cy.wrap($policy).find('a')
        //             //.click();
        //     }
        // })

        
        // cy.searchPolicy("PAP-0000526-01")
        // cy.searchByInfo("name", "karol")
        // cy.openPapOptions("PAP-0000526-01")

        // cy.get("tbody td:nth-child(8)>div>div").each((pap) =>
        // {
        //     const papOption = pap.find("button")
        //     cy.log(papOption)
        // })

        // cy.fixture("DOM/policies").then((the)  =>
        // {
        //     cy.get(the.SearchBarInput)
        //         .type("PAP-0000542-00")
        //     cy.get(the.FilterBySelect.select)
        //         .scrollIntoView()
        //         .click()
        //     cy.contains(the.FilterBySelect.data.email)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.quoteNumber)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.renovationDate)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.vin)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.make)
        //         .should("be.visible")
        //         .scrollIntoView()
        //     cy.contains(the.FilterBySelect.data.model)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.name)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.clear)
        //         .should("be.visible")
        //     cy.contains(the.FilterBySelect.data.policyNumber)
        //         .scrollIntoView()
        //         .should("be.visible")
        //         .click();
        //     cy.contains("button", the.SearchButton)
        //         .click()
        // })        
    })
})