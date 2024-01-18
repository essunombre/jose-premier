//7388

/// <reference types="cypress" />
describe("Automating Commercial policy", () => {
  //Attempt for login
  ////Create Quote
  it.only("Verifying frontend policies payment", () => {
    cy.visit("/");

    cy.origin("https://premierpr.us.auth0.com", () => {
      cy.contains("form", "Email address")
        .find('[inputmode="email"]')
        .type("jalbancando@premier.pr");
      // cy.contains('form', 'Password').find('#password').click();
      cy.contains("form", "Password").find("#password").type("Premier1*");
      // cy.get('[type="submit"]');a
      cy.contains("form", "Continue").find('[name="action"]').eq(1).click();
      cy.wait(2000);
    });

    //Verify User
    // cy.get('div.ml-3').should('contain', 'Jose  Albancando');

    //go to New Quote
    // cy.get('[href="/"]');
    //Select Agemt
    // cy.get('select#Agent\\.Id').select('CZ Agent');
    // cy.get("select#Agent\\.Id").select("JQa9 Agent"); //qa
    cy.get('select#Agent\\.Id').select('JDev9 Agent'); //dev

    //Select Dealer
    // cy.get('select#Dealer\\.Id').select('CZ Dealer');
    // cy.get("select#Dealer\\.Id").select("JQa9 Dealer"); //qa
    cy.get('select#Dealer\\.Id').select('JDev9 Dealer'); //dev

    //Select Next
    cy.contains("button", "Next").click();

    //FAKE BEGGINING
    //Add first name
    cy.get("input#Prospect\\.Name\\.FirstName").clear().type("CommercialPP");

    cy.contains("button", "Back").click();

    //Check Commercial and actually verify it is being checked.
    cy.contains("Commercial").click();
    //   .should("have.attr", "aria-checked", "true");

    //Set OptionalDiscount to 0
    cy.get("#OptionalDiscount").clear().type("0");

    //Select Next
    cy.contains("button", "Next").click();

    ////////////////////////DRIVER/////////////////////////

    //Adding Company Name
    //     //Add first name
    cy.get("input#Prospect\\.CompanyName").clear().type("CommercialPP");

    //Adding Named Insured (Type of business)
    cy.get("select#Prospect\\.NamedInsured").select("Corporation");
    // .select('Partnership')
    // .select('Limited Liability Co. (LLC)')
    // .select('Individual')
    // .select('Other')

    //Adding Businesss Description
    cy.get("input#Prospect\\.BusinessDescription")
      .clear()
      .type("Test for CR7 Commercial");

    //Add first name
    cy.get("input#Prospect\\.Name\\.FirstName").clear().type("DEVTest19a");

    //Add last name
    cy.get("input#Prospect\\.Name\\.LastName").clear().type("Test");

    //Add second last name
    cy.get("#Prospect\\.Name\\.SecondLastName").type("Test");

    //Add email
    cy.get("input#Prospect\\.Email")
      .clear()
      .type("olafpekerman+Commercial@gmail.com");

    //Gender
    cy.get('input[name="Prospect.Gender"][value="1"]').click();
    // cy.get('input[name="Prospect.Gender"][value="2"]');
    // cy.get('input[name="Prospect.Gender"][value="1"]').click();

    //Add birthdate
    // cy.get("#cal-Prospect\\.BirthDate").invoke("text", "September 9, 1996");
    // FAKE;
    // cy.get("#cal-Prospect\\.BirthDate").type("20/20/2000"); //.click(); NO
    // cy.get('[name="Prospect.BirthDate"]'); //.type('20/20/2000'); NO

    // Freaking Format
    cy.get("#cal-Prospect\\.BirthDate").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(1) > button").click();
    cy.get("tr:nth-of-type(2) > td:nth-of-type(7) > button").click();

    //Add civil status
    cy.get("select#Prospect\\.CivilStatus").select("Single");

    //Add License number
    cy.get("input#Prospect\\.LicenseNumber").type("969696");

    //Add Postal Address
    cy.get("input#Prospect\\.POBox").type("Urb Las Nubes 59 Calle Via Olivos");

    //Company physical address
    cy.get("input#Prospect\\.Address").type(
      "Urb Las Nubes 59 Calle Via Olivos CAGUAS"
    );

    //Add Zip Code
    cy.get("input#Prospect\\.ZipCode").type("00986");

    //Click next button
    cy.contains("button", "Next").click();

    //////////////////////VEHICLE/////////////////////////
    //**Vehicle Information**/

    //Add Vehicle Make
    cy.get("select#Vehicle\\.Make\\.Id").select("TESLA");

    //Add Vehicle Model
    cy.get("select#Vehicle\\.Model\\.Id").select("MODEL Y");

    //Add Vehicle Year
    cy.get("input#Vehicle\\.Year").type("2023");

    //Add Vehicle Condition
    cy.get("select#Vehicle\\.VehicleCondition").select("New");

    //Add Vehicle Sales Price
    // cy.get('input#Vehicle\\.ActualValue').type('32890');
    // cy.get('[name="Prospect.BirthDate"]').type('32890');
    cy.get('input[name="Vehicle.ActualValue"]').type("90000");


    //Add Vehicle Use
    cy.get("select#Vehicle\\.VehicleUse")
    // .select("Commercial");
    // .select('Delivery')
    .select('Private Passenger')
    // .select('Service')
    
    //Add PolicyTerm
    cy.get("select#Vehicle\\.Term").select("12 months");

    //Add Policy Effective Date FEO
    cy.get("#cal-PolicyEffectiveDate").click();
    cy.get("tr:nth-of-type(5) > td:nth-of-type(4) > button").click();
    
    
    //Passenger User
    cy.get("select#Vehicle\\.PassengerUse")
      // .select('1'); //Not Driven To Work Or School
      .select("2"); //To Or From Work Less Than 15 Miles
      // .select('3'); //To Or From Work 15 Or More Miles
   
   
    //Operator Experience
    cy.get("select#Vehicle\\.OperatorExperience")
      .select('1'); //No operator licensed less than five years
      // .select("2"); //Operator licensed less than five years not owner or principal operator
      // .select('3'); //Owner or principal operator licensed less than five years

    //Is part of Fleet CHECK
    // cy.get('input[name="Vehicle.IsFleet"]').check();


    //Get quote button
    cy.contains("button", "Get quote").click();

    //Quote Engine

    //COMMERCIAL LIABILITY
    cy.contains("button", "Select").click();

    //COMMERCIAL FULL COVER
    // cy.get('.lg\\:space-y-0 > :nth-child(2) > .disabled\\:cursor-not-allowed').click();

    //Get quote button
    cy.contains("button", "Submit").click();

    //Click Issue
    cy.contains("Issue").click();

    

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Issue Policy

    //Inspection Sticker Expiration Month (Expiración de Marbete)
    cy.get("select#InspectionStickerExpireMonth").select("September");

    //Inspection Sticker Expiration Year (Expiración de Marbete)
    cy.get("select#InspectionStickerExpireYear").select("2023");

    //Inspection Sticker Price (Costo Marbete)
    //option a
    cy.get('input[name="InspectionStickerPrice"][value="96.53"]').check();
    // cy.get("#mantine-38d9h9bkp").click();

    //option b
    // cy.get("#mantine-votf34gv5").click();

    //Custom
    // cy.get("#mantine-28afct1l2").click();

    //Driver License Number
    cy.get("input#LicenseNumber").type("969696");

    //Phone number
    cy.get('input[name="PhoneNumber"]').type("7873336851");

    //VIN Number
    cy.get("input#Vin").type("00000000000000000");

    //Vehicle License Plate
    cy.get("input#Plate").type("abc-123");

    //Bank
    cy.get("select#Bank").select("ORIENTAL BANK");

    //date came from before
    //Click Issue policy
    cy.contains("button", "Issue policy").click();

    //Click Issue policy
    cy.contains("button", "Proceed").click();

    // Click Print
    cy.contains("button", "Print").invoke("removeAttr", "target").click();

  });
});
