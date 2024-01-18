describe('Premier Testi Suit', () => {
    beforeEach("Login", ()=>
    {
        cy.fixture("DOM/login.Page").then((the)=>
        {
            cy.login(
                the.username.data.valid,
                the.password.data.valid
            )
           
        })

    })

    it.only("doing the payment", () =>
    {
        cy.visit("https://premier-quote-frontend-qa.azurewebsites.net/policies/9bc0272b-b598-4b72-12e7-08dbe61b03ad/pay")
        cy.fixture("DOM/pay.Policy").then( (the)=>
        {

            //This is for external payment ACH requisition
            // cy.contains(the.PayButton)
            //     .click()
            cy.contains("button", the.PayNowButtonOption)
                .should("be.visible")
                .click()
            cy.contains("button", the.SendSMSButton)
                .should("be.visible")
            cy.contains("button", the.SendEmailButton)
                .should("be.visible")
            cy.contains("button", the.CopyURLButton)
                .should("be.visible")
            cy.contains(the.PayNowButton)
                .should("be.visible")
                .invoke("removeAttr", "target")
                .click()
            // cy.origin('https://checkout.stripe.com', () => 
            // {
                cy.contains(the.PayWithCardStripe)
            //         .should("be.visible")
            //     cy.get('#cardNumber').type('4242424242424242');
            //     cy.get('#cardExpiry').type('1225');
            //     cy.get('#cardCvc').type('777');
            //     cy.get('#billingName').type('TestPay');
            //     cy.get('.SubmitButton-IconContainer')
            //     // cy.get('.SubmitButton-IconContainer').click()

            // })          

        })
    })
})