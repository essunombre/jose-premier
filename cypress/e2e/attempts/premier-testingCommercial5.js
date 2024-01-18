//5680 Service	Heavy (20,001 - 45,000 lbs)	No	90000	00986	101	Specialized Delivery	All Other	311	49

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
    cy.get("input#Prospect\\.Name\\.FirstName").clear().type("CommercialHeavy5680");

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
    cy.get("input#Prospect\\.CompanyName").clear().type("CommercialHeavy5680");

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
    // .select('Private Passenger')
    .select('Service')

    //Add PolicyTerm
    cy.get("select#Vehicle\\.Term").select("12 months");

    //Add Policy Effective Date FEO
    cy.get("#cal-PolicyEffectiveDate").click();
    cy.get("tr:nth-of-type(5) > td:nth-of-type(4) > button").click();

    //Size Class
    cy.get("select#Vehicle\\.SizeClass")
      // .select('1'); //Light (0 - 10,000 lbs)
      // .select("2"); //Medium (10,001 - 20,000 lbs)
      .select('3'); //Heavy (20,001 - 45,000 lbs)
      // .select('4'); //Extra-Heavy (more than 45,000 lbs)

    //Select Secondary Classification
    cy.get("select#Vehicle\\.SecondaryClassification")
      // .select('1'); //Contractors
      // .select('2'); //Dump and Transir Mix
      // .select('3'); //Farmers
      // .select('4'); //Food Delivery
      .select('5'); //Specialized Delivery
      // .select('6'); //Trucks
      // .select("7"); //Waste Disposal
      // .select('8'); //Others

    ///////////////////////////////////////Vehicle Sub Class///////////////////////////////////////
    cy.get("select#Vehicle\\.SubClass")
      //Contractors
      // .select('1'); //Building Commercial
      // .select('2'); //Building Private Dwellings
      // .select('3'); //Electrical, Plumbing, Masonry, Plastering and Other Repair or Service
      // .select('4'); //Excavating
      // .select('5'); //Street and Road
      // .select('6'); //All Other

      //Dump and Transir Mix
      //   .select('1'); //Excavating
      // .select('2'); //Mining
      //   .select('3'); //Quarrying
      //   .select('4'); //Sand and Gravel
      // .select('5'); //All Other

      //Farmers
      //   .select('1'); //Individually Owned or Family Corp.
        // .select('2'); //Livestock Hauling
      //   .select('3'); //All Other

      //Food Delivery
      //   .select('1'); //Canneries and Packing Plants
      //   .select('2'); //Fish and Seafood
      // .select('3'); //Frozen Food
      // .select('4'); //Fruit and Vegetable
      //   .select('5'); //Meat or Poultry
      //   .select('6'); //All Other

      //Specialized Delivery
      //   .select('1'); //Armored Cars
      //   .select('2'); //Film Delivery
        // .select('3'); //Magazines or Newspapers
      //   .select('4'); //Mail and Parcel Post
        .select('5'); //All Other

      //Trucks
        // .select('1'); //Carriers Engaged in both Private Carriage and Transporting Goods
      //   .select('2'); //Common Carriers
      //   .select('3'); //Contract Carriers
      //   .select('4'); //Contract Carriers Hauling Chemicals
      //   .select('5'); //Contract Carriers Hauling Iron and Steel
        // .select('6'); //Exempt Carriers
        // .select('7'); //Exempt Carriers Hauling Livestock
      //   .select('8'); //Tow Trucks-hire
      //   .select('9'); //All Other

      //Waste Disposal
      //   .select('1'); //Auto Dismantlers
      //   .select('2'); //Building Wreckling Operators
      //   .select('3'); //Garbage
      // .select("4"); //Junk Dealers
      //   .select('5'); //All Other

    //Others
    //   .select('1'); //Logging and Lumbering
    //   .select('2'); //All Other

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //Is part of Fleet CHECK
    // cy.get('input[name="Vehicle.IsFleet"]').should('not.be.checked');
    // cy.get('input[name="Vehicle.IsFleet"]').check();
    // cy.get('input[name="Vehicle.IsFleet"]').should('be.checked');

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
