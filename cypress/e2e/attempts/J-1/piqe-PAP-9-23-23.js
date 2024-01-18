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

    ////Create Quote
    it('Create a Full Cover Quote', () => {

        cy.fixture("DOM/issue.Pap").then((the)=>
        {
            // cy.get(the.agent.select).select(the.agent.data.validDev)
            // cy.get(the.dealer.select).select(the.dealer.data.validDev)
            cy.contains(the.NextButton).click()

            //**Personal Information**/
            cy.get(the.firstName.input)
                .clear()
                .type(the.firstName.data.valid)
            
            cy.get(the.lastName.input)
                .clear()
                .type(the.lastName.data.valid)
                
            cy.get(the.secondLastName.input)
                .clear()
                .type(the.secondLastName.data.valid)

            cy.get(the.email.input)
                .type(the.email.data.valid)

            cy.get(the.gender.male)
                // .click()
            cy.get(the.gender.female)
                .click()

            cy.get(the.civilStatus.select)
                .select(the.civilStatus.data.married)

            //Add birthdate
            // cy.get("#cal-Prospect\\.BirthDate").invoke('text', 'September 9, 1996'); FAKE
            // cy.get("#cal-Prospect\\.BirthDate").type('20/20/2000')//.click(); NO
            // cy.get('[name="Prospect.BirthDate"]')//.type('20/20/2000'); NO
            
            // FROM RECORDER
            cy.get("#cal-Prospect\\.BirthDate").click();
            cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
            cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
            cy.get("tr:nth-of-type(2) > td:nth-of-type(7) > button").click();

            cy.get(the.licenseNumber.input)
                .type(the.licenseNumber.data.valid)

            cy.get(the.postalAddress.input)
                .type(the.postalAddress.data.valid)

            cy.get(the.physicalAddress.input)
                .type(the.physicalAddress.data.valid)

            cy.get(the.zipCode.input)
                .type(the.zipCode.data.valid)

            cy.get(the.occupation.select)
                .select(the.occupation.data.engineer)

            cy.contains(the.NextButton).click()
            
            //**Vehicle Information**/
            cy.get(the.vehicleMake.select)
                .select(the.vehicleMake.data.tesla)

            cy.get(the.vehicleModel.select)
                .select(the.vehicleModel.data.modely)
            
            cy.get(the.vehicleYear.input)
                .type(the.vehicleYear.data.valid)
            
            cy.get(the.vehicleCondition.select)
                .select(the.vehicleCondition.data.new)

            cy.get(the.vehicleActualValue.input)
                .type(the.vehicleActualValue.data.valid)
                
            cy.get(the.vehicleUse.select)
                .select(the.vehicleUse.data.leisure)

            cy.get(the.depreciation.select)
                .select(the.depreciation.data.fifteen)

            cy.get(the.term.select)
                .select(the.term.data.twelve)

            //Add Policy Effective Date FEO
            cy.get("#cal-PolicyEffectiveDate").click()
            cy.get('[type="button"][data-previous="true"]')
                .click()
                .click()
            cy.get("tr:nth-of-type(4) > td:nth-of-type(6) > button")
                .click()

            cy.contains(the.GetQuoteButton).click();
            
            //DOUBLE INTEREST -- NOT DEFERRED
            // cy.get(the.DoubleInterestButton).click();
            //LIABILITY
            // cy.get(the.LiabilityButton).click();
            //FULL COVER
            cy.get(the.FullCoverButton).click();
            //DOUBLE INTEREST + LIABILITY -- NOT DEFFERED
            // cy.get(the.DoublePlusLiabilityButton).click();

            cy.contains(the.SubmitButton).click();
            cy.contains(the.isQuoteCreated)
                .should("be.visible")

            cy.contains(the.IssueButton).click();

            //Issue Policy
            cy.get(the.stickerMonth.select)
                .select(the.stickerMonth.data.september)
            
            cy.get(the.stickerYear.select)
                .select(the.stickerYear.data.twentyfour)
            
            // cy.get(the.stickerPrice.ninetysix)
            cy.get(the.stickerPrice.hundredfourtyfour)
                .check()

            cy.get(the.license.input)
                // .type(the.license.data.valid) This comes from the license

            cy.get(the.phoneNumber.input)
                .type(the.phoneNumber.data.valid)

            cy.get(the.plate.input)
                .type(the.plate.data.valid)

            cy.get(the.vin.input)
                .type(the.vin.data.valid)
            
            cy.get(the.bank.select)
                .select(the.bank.data.oriental)

            cy.contains(the.IssuePolicyButton).click();
            cy.contains(the.ProceedButton).click();
            cy.wait(2000);
            cy.contains(the.isPolicyCreated)
                .should("be.visible")

            
            // //////Payments  
            // cy.contains("Pay").click();
            // cy.contains("Pay now").invoke('removeAttr', 'target').click();
            // cy.get('#cardNumber').type('4242424242424242')
            // cy.origin('https://checkout.stripe.com', () => 
            // {
            //     cy.on('uncaught:exception', (e) => 
            //     {
            //         if (e.message.includes('Things went bad')) {
            //         // we expected this error, so let's ignore it
            //         // and let the test continue
            //         return false
            //         }
            //         cy.get('#cardNumber').type('4242424242424242');
            //         cy.get('#cardExpiry').type('1225');
            //         cy.get('#cardCvc').type('777');
            //         cy.get('#billingName').type('TestPay');
            //         cy.get('.SubmitButton-IconContainer').click();

            //     })

            // })
        })
        // it("Performa a payment")

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////


        //Inspection Sticker Price (Costo Marbete)
        //option a
        // cy.get('input[name="InspectionStickerPrice"][value="96.53"]').check();
        // cy.get("#mantine-38d9h9bkp").click();
        //option b
        // cy.get("#mantine-votf34gv5").click();
        //Custom
        // cy.get("#mantine-28afct1l2").click();
        
    })    
})