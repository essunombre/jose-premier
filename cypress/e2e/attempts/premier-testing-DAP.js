/// <reference types="cypress" />
describe('Premier Testi Suit', () => {

    //Attempt for login
    it('Attempt with my login perro', () => {
        cy.visit('https://premier-quote-frontend-dev.azurewebsites.net/');

        cy.origin('https://premierpr.us.auth0.com', () =>{
            cy.contains('form', 'Email address').find('[inputmode="email"]').type('jalbancando@premier.pr');
            // cy.contains('form', 'Password').find('#password').click();
            cy.contains('form', 'Password').find('#password').type('Premier1*');
            // cy.get('[type="submit"]');
            cy.contains('form', 'Continue').find('[name="action"]').eq(1).click();
            cy.wait(4000);
        });

        //Verify User
        //THIS IN DEV
        // cy.get('div.ml-3').should('contain', 'Jose  Albancando');

        //go to New Quote
        // cy.get('[href="/"]');

        //go to Quotes 
        // cy.get('[href="/quotes"]');
        cy.get('button', 'Go to New Quote').click();

        //go to Policies 
        // cy.get('[href="/policies"]');
        cy.get('button[title="Go to Policies"]').click();

        //go to Users 
        // cy.get('[href="/users"]');
        cy.get('button[title="Go to Users"]').click();

        //go to Agents 
        // cy.get('[href="/agents"]');
        cy.get('button[title="Go to Agents"]').click();

        //go to Commissions
        // cy.get('[href="/commission"]');
        cy.get('button[title="Go to Commissions"]').click();

        //go to Dealers 
        // cy.get('[href="/dealers"]');
        cy.get('button[title="Go to Dealers"]').click();

        //go to Banks 
        // cy.get('[href="/banks"]').click();
        cy.get('button[title="Go to Banks"]').click();

        //Log out
        cy.get('div.ml-3 button').should('have.text', 'Logout');


    })

    //Attempt to create a user
    it('Attempt to create a user perro', () => {
        cy.visit('https://premier-quote-frontend-qa.azurewebsites.net/');

        cy.origin('https://premierpr.us.auth0.com', () =>{
            cy.contains('form', 'Email address').find('[inputmode="email"]').type('jalbancando@premier.pr');
            // cy.contains('form', 'Password').find('#password').click();
            cy.contains('form', 'Password').find('#password').type('Premier1*');
            // cy.get('[type="submit"]');
            cy.contains('form', 'Continue').find('[name="action"]').eq(1).click();
            cy.wait(4000);
        });

        //Verify User
        cy.get('div.ml-3').should('contain', 'Jose  Albancando');

        //go to Users 
        cy.get('[href="/users"]').click();

        //Click on Add user button 
        cy.get('[href="/users/create"]').click();

        //Add first name
        cy.contains('form', 'First name').find('#given_name').type('Cristiano');
        
        //Add last name
        cy.contains('form', 'Last name').find('#family_name').type('Ronaldo');
        
        //Add last name
        cy.contains('form', 'Email').find('#email').clear('');

        //Log out
        // cy.get('div.ml-3 button').should('have.text', 'Logout');


    })

    ////Verify Frontend payments
    it('Verifying frontend policies payment', () => {
        cy.visit('/');


        cy.origin('https://premierpr.us.auth0.com', () =>{
            cy.contains('form', 'Email address').find('[inputmode="email"]').type('jalbancando@premier.pr');
            // cy.contains('form', 'Password').find('#password').click();
            cy.contains('form', 'Password').find('#password').type('Premier1*');
            // cy.get('[type="submit"]');
            cy.contains('form', 'Continue').find('[name="action"]').eq(1).click();
            cy.wait(4000);
        });

        //Verify User
        cy.get('div.ml-3').should('contain', 'Jose  Albancando');
    
        //go to Policies 
        cy.get('[href="/policies"]').click();
        cy.wait(2000);

        //Verify options on list
        cy.get('thead th').eq(6);
        cy.get('thead th').eq(6).type('Paid');
        cy.get('input[type="search"]').eq(2)

    })

    ////Create Quote
    it.only('Verifying frontend policies payment', () => {
        cy.visit('/');


        cy.origin('https://premierpr.us.auth0.com', () =>{
            cy.get('#username').type("jalbancando@premier.pr");
            cy.get('#password').type("Premier1*");
            cy.contains('form', 'Continue').find('[name="action"]').eq(1).click();
            cy.wait(2000);
        });

        cy.visit("https://premier-quote-frontend-qa.azurewebsites.net/policies/fa7a4b5e-b655-ee11-9935-0022483546fe/pay")
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
            cy.get('.SubmitButton-IconContainer').click()
        })
        
        
    })

    ////Create Quote
    it('Verifying frontend policies payment', () => {
        cy.visit('/');


        cy.origin('https://premierpr.us.auth0.com', () =>{
            cy.contains('form', 'Email address').find('[inputmode="email"]').type('jalbancando@premier.pr');
            // cy.contains('form', 'Password').find('#password').click();
            cy.contains('form', 'Password').find('#password').type('Premier1*');
            // cy.get('[type="submit"]');a
            cy.contains('form', 'Continue').find('[name="action"]').eq(1).click();
            cy.wait(2000);
        });

        //Verify User
        cy.get('div.mantine-emotion-cache-1fazq8z').should('contain', 'Jose  Albancando');
        
        //go to new Quote 
        // cy.get('button', 'Go to New Quote').click();
        
        //go to Quotes 
        cy.get('button[title="Go to Quotes"]').click();        

        cy.get('#search');
        cy.get('input[id="search"]').type('00007587');

        cy.get('.font-mono:visible').should('have.length',20);

        //go to Policies 
        cy.get('button[title="Go to Policies"]').click();

        cy.get('[title="View policy details"]');

        //Get to like find the section
        cy.get('.mantine-emotion-cache-Table-root');


        cy.get('.mantine-emotion-cache-Table-root').find('[title="View policy details"]').should('have.length', 10);


        // cy.get('.mantine-emotion-cache-Table-root').find('[title="View policy details"]').eq(3).click();

        cy.get('.mantine-emotion-cache-Table-root').find('[title="View policy details"]').each(($element) =>{

            const textPolicy = $element.find('span').text().trim();
            cy.log(textPolicy);
            if (textPolicy.includes('PAP-0000522-01'))
            {
                cy.wrap($element).find('a').click();
            }
        })

        //go to Users 
        // cy.get('button[title="Go to Users"]').click();

        //go to Agents 
        // cy.get('button[title="Go to Agents"]').click();

        //go to Commissions
        // cy.get('button[title="Go to Commissions"]').click();

        //go to Dealers 
        // cy.get('button[title="Go to Dealers"]').click();

        //go to Banks 
        // cy.get('button[title="Go to Banks"]').click();

        })
    
})