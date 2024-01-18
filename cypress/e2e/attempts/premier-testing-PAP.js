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
            cy.contains('form', 'Continue').find('[name="action"]').eq(2).click();
            cy.wait(2000);
        });

        //Verify User
        cy.get('.mantine-emotion-cache-1fazq8z') // You may need to adjust the selector
        .should('be.visible') // Ensure the element is visible
        .should('contain', 'jalbancando@premier.pr'); // Check if it contains the expected email address
    
        //go to New Quote
        // cy.get('[href="/"]');
        //Select Agemt
        // cy.get('select#Agent\\.Id').select('CZ Agent');
        // cy.get('select#Agent\\.Id').select('JQa9 Agent'); //qa
        cy.get('select#Agent\\.Id').select('JDev9 Agent'); //dev
        
        //Select Dealer
        // cy.get('select#Dealer\\.Id').select('CZ Dealer');
        // cy.get('select#Dealer\\.Id').select('JQa9 Dealer'); //qa
        cy.get('select#Dealer\\.Id').select('JDev9 Dealer'); //dev

        //Select Next
        cy.contains('button', 'Next').click();

        //**Personal Information**/
        //Add first name
        cy.get('input#Prospect\\.Name\\.FirstName')
        .clear()
        .type('DifCamilo117');
          
        //Add last name
        cy.get('input#Prospect\\.Name\\.LastName').clear().type('ZIP');

        //Add second last name
        cy.get("#Prospect\\.Name\\.SecondLastName").type("Test");
          
        //Add email
        cy.get('input#Prospect\\.Email').clear().type('olafpe\nkerman+DifCamilo117@gmail.com');

        //Gender
        cy.get('input[name="Prospect.Gender"][value="1"]').click();
        cy.get('input[name="Prospect.Gender"][value="2"]');
        //cy.get('input[name="Prospect.Gender"][value="1"]').click();
        
        //Add civil status
        cy.get('select#Prospect\\.CivilStatus').select('Single');

        //Add birthdate
        // cy.get("#cal-Prospect\\.BirthDate").invoke('text', 'September 9, 1996'); FAKE
        // cy.get("#cal-Prospect\\.BirthDate").type('20/20/2000')//.click(); NO
        // cy.get('[name="Prospect.BirthDate"]')//.type('20/20/2000'); NO
        
        // FROM RECORDER
        cy.get("#cal-Prospect\\.BirthDate").click();
        cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
        cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
        cy.get("tr:nth-of-type(2) > td:nth-of-type(7) > button").click();

        //Add License number
        cy.get('input#Prospect\\.LicenseNumber').type('969696');
        
        //Add Postal Address
        cy.get('input#Prospect\\.POBox').type('Urb Las Nubes 59 Calle Via Olivos');
        
        //Physical Address
        cy.get('input#Prospect\\.Address').type('Urb Las Nubes 59 Calle Via Olivos CAGUAS');
        
        //Add Zip Code 
        // cy.get('input#Prospect\\.ZipCode').type('00902');
        cy.get('input#Prospect\\.ZipCode').type('00727');
        // cy.get('input#Prospect\\.ZipCode').type('00000');

        //Add Occupatiom
        cy.get('select#Prospect\\.Occupation\\.Id').select('DOCTOR');

        //Click next button
        cy.contains('button', 'Next').click();

        //**Vehicle Information**/

        //Add Vehicle Make
        cy.get('select#Vehicle\\.Make\\.Id').select('TESLA');
        
        //Add Vehicle Model
        cy.get('select#Vehicle\\.Model\\.Id').select('MODEL Y');
        
        //Add Vehicle Year
        cy.get('input#Vehicle\\.Year').type('2023');

        //Add Vehicle Condition
        cy.get('select#Vehicle\\.VehicleCondition').select('New');

        //Add Vehicle Sales Price
        // cy.get('input#Vehicle\\.ActualValue').type('32890');
        // cy.get('[name="Prospect.BirthDate"]').type('32890');
        cy.get('input[name="Vehicle.ActualValue"]').type('6000');

        //Add Vehicle Use
        cy.get('select#Vehicle\\.VehicleUse').select('Drive to work (15 miles or more)');

        //Add Vehicle Estimated Yearly Depreciation
        cy.get('select#Vehicle\\.EstimatedAnnualDepreciation').select('15%');

        //Add Vehicle Policy Term
        cy.get('select#Vehicle\\.Term').select('78 months');

        //Add Policy Effective Date FEO
        cy.get("#cal-PolicyEffectiveDate").click();
        cy.get("tr:nth-of-type(4) > td:nth-of-type(4) > button").click();

        //Click Get quote button
        cy.contains('button', 'Get quote').click();

        //Quote Engine

        //DOUBLE INTEREST -- NOT DEFERRED
        // cy.get("div:nth-of-type(1) > button.disabled\\:cursor-not-allowed").click();

        //LIABILITY
        // cy.get("div:nth-of-type(2) > button.disabled\\:cursor-not-allowed").click();

        //FULL COVER
        cy.get("div:nth-of-type(3) > button.disabled\\:cursor-not-allowed").click();

        //DOUBLE INTEREST + LIABILITY -- NOT DEFFERED
        // cy.get("div:nth-of-type(4) > button.disabled\\:cursor-not-allowed").click();

        //Click Submit
        cy.contains('button', 'Submit').click();

        //Click Issue
        // cy.contains('button', 'Issue').click();
        cy.contains('Issue').click();

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Issue Policy

        //Inspection Sticker Expiration Month (Expiración de Marbete)
        cy.get('select#InspectionStickerExpireMonth').select('September');

        //Inspection Sticker Expiration Year (Expiración de Marbete)
        cy.get('select#InspectionStickerExpireYear').select('2023');

        //Inspection Sticker Price (Costo Marbete)
        //option a
        cy.get('input[name="InspectionStickerPrice"][value="96.53"]').check();
        // cy.get("#mantine-38d9h9bkp").click();
        
        //option b
        // cy.get("#mantine-votf34gv5").click();
        
        //Custom
        // cy.get("#mantine-28afct1l2").click();


        //Driver License Number
        cy.get('input#LicenseNumber').type('969696');

        //Phone number
        // cy.get('input[name="PhoneNumber"]').type('7873336851');
        // cy.get('input[name="PhoneNumber"]').type('7875397445'); //Ryan
        cy.get('input[name="PhoneNumber"]').type('3854826077'); //Hared

        //Vehicle License Plate
        cy.get('input#Plate').type('abc-123');

        //VIN Number
        cy.get('input#Vin').type('00000000000000000');

        //Bank
        cy.get('select#Bank').select('ORIENTAL BANK');


        //date came from before
        //Click Issue policy
        cy.contains('button', 'Issue policy').click();

        //Click Issue policy
        cy.contains('button', 'Proceed').click();
       ////////////////////////////////////////
        
        
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