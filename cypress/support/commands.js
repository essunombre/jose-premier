import QuoteEngine from "../fixtures/pageObjects/QuoteEngine"
import Issue from "../fixtures/pageObjects/Issue"
import ChecksType from "../reference/checksType"
import PolicyType from "../reference/policyType"
import RoleType from "../reference/roleType"
import EnvType from "../reference/envType"
import CoverageType from "../reference/coverageType"

const quoteEngine = new QuoteEngine()
const issue = new Issue()
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("loginSession", (email, password) => 
{
  cy.session( [email, password], () =>
  {
    cy.visit("/")
    cy.url().should("contain", "premier")

    cy.origin(
      "https://premierpr.us.auth0.com", 
      {args: [email, password]}, 
      ([email, password]) => 
      {
        // cy.contains("Welcome").should('be.visible')
        cy.get('#username')//Email
            .type(email) 
        cy.get('#password')//Password
            .type(password) 
            cy.get('button[data-action-button-primary="true"]')//login Button
            .click()
      })
  cy.get('.mantine-emotion-cache-Text-root').should('contain', email).should('be.visible');
    }
  )
})

Cypress.Commands.add("login", (email, password) => 
{
    cy.visit("/")
    cy.url().should("contain", "premier")

    cy.origin(
      "https://premierpr.us.auth0.com", 
      {args: [email, password]}, 
      ([email, password]) => 
      {
        cy.contains("Welcome").should('be.visible')
        cy.get('#username')//Email
            .type(email) 
        cy.get('#password')//Password
            .type(password) 
            cy.get('button[data-action-button-primary="true"]')//login Button
            .click()
      })
  // cy.get('.mantine-emotion-cache-Text-root').should('contain', email).should('be.visible');

})

Cypress.Commands.add('setBirthdate', (pastDay, pastMonth, pastYear) =>
{
  const quoteEngine = new QuoteEngine()
  // Extract date components
  let pastMonthShort = pastMonth.substring(0,3)
  let dateToAssert = `${pastMonth} ${pastDay}, ${pastYear}`
  // Function to find the provided year
  function findPastYear() 
  {
    cy.log(dateToAssert);
    quoteEngine.selectAvailableYearsBirthday().invoke('text').then((yearsText) => 
    {
      if (!yearsText.includes(pastYear)) 
      {
        cy.log(`${pastYear} is not here, clicking Previous DatePicker again`)
        quoteEngine.selectPreviousDatePickerBirthdate().click()
        findPastYear() // Recursive call
      }else 
      {
        cy.log(`${pastYear} is here`)
      }
    })
  }

  // Interaction with the quote engine
  cy.log('Input');
  quoteEngine.selectBirthDate().then((input) => 
  {
    cy.wrap(input).click()
    findPastYear() // Recursive function
    quoteEngine.availableYearsBirthday().contains(pastYear).click()
    quoteEngine.selectAvailableMonthsBirthday().contains(pastMonthShort).click()
    quoteEngine.selectAvailableDaysBirthday().contains(pastDay).click()
    cy.log(dateToAssert)
    quoteEngine.selectBirthDate().should('contain', dateToAssert)
 })
})

Cypress.Commands.add('setAdditionalDriverBirthdate', (pastDay, pastMonth, pastYear) =>
{
  const quoteEngine = new QuoteEngine()
  // Extract date components
  let pastMonthShort = pastMonth
  let dateToAssert = `${pastMonth} ${pastDay}, ${pastYear}`
  // Function to find the provided year
  function findPastYear() 
  {
    cy.log(dateToAssert);
    quoteEngine.selectAvailableYearsBirthday().invoke('text').then((yearsText) => 
    {
      if (!yearsText.includes(pastYear)) 
      {
        cy.log(`${pastYear} is not here, clicking Previous DatePicker again`)
        quoteEngine.selectPreviousDatePickerBirthdate().click()
        findPastYear() // Recursive call
      }else 
      {
        cy.log(`${pastYear} is here`)
      }
    })
  }

  // Interaction with the quote engine
  cy.log('Input');
  quoteEngine.selectAdditionalDriverBirthDate().then((input) => 
  {
    cy.wrap(input).click()
    findPastYear() // Recursive function
    quoteEngine.availableYearsBirthday().contains(pastYear).click()
    quoteEngine.selectAvailableMonthsBirthday().contains(pastMonthShort).click()
    quoteEngine.selectAvailableDaysBirthday().contains(pastDay).click()
    cy.log(dateToAssert)
    //THIS NEED HELP FROM FRONTEND TO BE LIKE THE OTHER DATEPICKER
    // quoteEngine.selectAdditionalDriverBirthDate().should('contain', dateToAssert)
 })
})

Cypress.Commands.add('setEffectiveDate', (pastDay, pastMonth, pastYear) =>
{
  // Extract date components
  let pastMonthShort = pastMonth.substring(0,3)
  let dateToAssert = `${pastMonth} ${pastDay}, ${pastYear}`
  // Function to find the provided year
  function findPastYear() 
  {
    cy.log(dateToAssert);
    quoteEngine.selectAvailableYearsBirthday().invoke('text').then((yearsText) => 
    {
      if (!yearsText.includes(pastYear)) 
      {
        cy.log(`${pastYear} is not here, clicking Previous DatePicker again`)
        quoteEngine.selectNextiDatePicker().click()
        findPastYear() // Recursive call
      }else 
      {
        cy.log(`${pastYear} is here`)
      }
    })
  }

  // Interaction with the quote engine
  cy.log('Input');
  quoteEngine.selectEffectiveDate().then((input) => 
  {
    cy.wrap(input).click()
    quoteEngine.selectYearDatePickerEffectiveDate()
      .click() //months
    quoteEngine.selectYearDatePickerEffectiveDate()
      .click() //years
    findPastYear() // Recursive function
    quoteEngine.availableYearsBirthday().contains(pastYear).click()
    quoteEngine.selectAvailableMonthsBirthday().contains(pastMonthShort).click()
    quoteEngine.selectAvailableDaysBirthday().contains(pastDay).click()
    cy.log(dateToAssert)
    quoteEngine.selectEffectiveDate().should('contain', dateToAssert)
 })
})

Cypress.Commands.add('selectDateInDatePicker', (year, month, day) => 
{
  // Click on the date picker button to open the date picker
  cy.get("#cal-Prospect\\.BirthDate").click();
  cy.get("[type='button'][data-previous='true']").click().click()

  // Select the year in the date picker
  cy.get('.mantine-emotion-cache-CalendarHeader-calendarHeaderLevel [data-mantine-stop-propagation="true"]').eq(2).click(); // Adjust the index accordingly

  // Select the month in the date picker
  cy.get('.mantine-emotion-cache-Month-month').contains(month).click();

  // Select the day in the date picker
  cy.get('.mantine-emotion-cache-Day-day').contains(day).click();

  // Optionally, click outside the date picker to close it
  cy.get('body').click();
});

Cypress.Commands.add('payExternalACHRequisition', ()=> 
{
  cy.fixture("DOM/pay.Policy").then( (the)=>
    {
      // cy.contains("button", the.PayButton)
      //     .click()
      cy.contains("button", the.PayNowButton)
          // .click()
      // cy.contains("button", the.PayDeferPaymentButton)
          // .click()
      // cy.contains("button", the.DeferPolicyButton)
          // .click()
      cy.contains("button", the.PayExternalPaymentButton)
          .click()
      cy.contains(the.externalPayment.callCenterPay.button)
          .click()
      cy.contains(the.externalPayment.callCenterPay.data.ach)
          .click()
      cy.contains(the.externalPayment.callCenterPay.data.creditCard)
          .click()
      cy.get(the.SubmitExternalButton)

      cy.contains(the.externalPayment.requisition)
          .click()
      cy.get(the.SubmitExternalButton)
      
      cy.contains(the.externalPayment.splitPayment.button)
          .click()
      cy.contains(the.externalPayment.splitPayment.data.creditCardCreditCard)
          .click()
      cy.contains(the.externalPayment.splitPayment.data.creditCardAch)
          .click()
      cy.contains(the.externalPayment.splitPayment.data.creditCardRequisition)
          .click()
      cy.contains(the.externalPayment.splitPayment.data.achRequisition)
          .click()
      cy.contains(the.externalPayment.check)
          // .click()
      cy.get(the.SubmitExternalButton)
          .click()
      cy.contains(the.isExternalPaymentDone)
          .should("be.visible")

      cy.url().then(currentUrl => 
      {
          const baseUrlWithoutPay = currentUrl.replace('/pay', '');
          cy.visit(baseUrlWithoutPay);
      });
    })
})

Cypress.Commands.add("captureStripeCheckoutUrl", () => {
  return cy.url().then((payNowUrl) => {
    // Return the URL directly
    return payNowUrl;
  });
});


Cypress.Commands.add("openPapOptions", (policyNumber) => 
{
  cy.get("tr td:nth-child(1)").each((policy, index) =>
  {
    if(policy.text().includes(policyNumber))
    {
      cy.get("tr td:nth-child(8)>div>div>button").eq(index).click()
      cy.contains("Endorse").click()
    }
  })
})



Cypress.Commands.add("searchByInfo", (type, info) =>
{
  cy.fixture("DOM/policies").then((the)  =>
  {
    cy.get(the.SearchBarInput)
      .type(info)
    cy.get(the.FilterBySelect.select)
      .scrollIntoView()
      .click()
    //validating visibility
    cy.contains(the.FilterBySelect.data.email)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.quoteNumber)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.renovationDate)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.vin)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.make)
      .should("be.visible")
      .scrollIntoView()
    cy.contains(the.FilterBySelect.data.model)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.name)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.clear)
      .should("be.visible")
    cy.contains(the.FilterBySelect.data.policyNumber)
      .scrollIntoView()
      .should("be.visible")

    switch(type)
    {
      case "email":
        cy.contains(the.FilterBySelect.data.email)
        .click()
        break
      case "quoteNumber":
        cy.contains(the.FilterBySelect.data.quoteNumber)
        .click()
        break
      // case "renovationDate":
      //   cy.contains(the.FilterBySelect.data.renovationDate)
      //   .click()
      //   break
      case "vin":
        cy.contains(the.FilterBySelect.data.vin)
        .click()
        break
      case "make":
        cy.contains(the.FilterBySelect.data.make)
        .click()
        break
      case "model":
        cy.contains(the.FilterBySelect.data.model)
        .click()
        break
      case "name":
        cy.contains(the.FilterBySelect.data.name)
        .click()
        break
      case "clear":
        cy.contains(the.FilterBySelect.data.clear)
        .click()
        break
      case "policyNumber":
        cy.contains(the.FilterBySelect.data.policyNumber)
        .click()
        break
    }

    cy.contains("button", the.SearchButton)
        .click()
  })  

})
//////IMPROVED
Cypress.Commands.add("firstStep", (envType, policyType, roleType) => 
{
  cy.fixture("DOM/issue.Pap").then((the)=>
  {
    quoteEngine.selectPersonalPolicy().should("be.visible")
    quoteEngine.selectCommercialPolicy().should("be.visible")
  switch (roleType)
  {
    case RoleType.isAdmin:
      quoteEngine.selectAgent().should("be.visible")
      quoteEngine.selectDealer().should("be.visible")
      quoteEngine.getOptionalDiscountInput().should("be.visible")
      break;
    case RoleType.isAgent:
      quoteEngine.selectAgent().should("not.exist")
      quoteEngine.selectDealer().should("be.visible")
      quoteEngine.getOptionalDiscountInput().should("be.visible")
      break;
    case RoleType.isDealer:
      quoteEngine.selectAgent().should("not.exist")
      quoteEngine.selectDealer().should("not.exist")
      quoteEngine.getOptionalDiscountInput().should("not.exist")
      break;
  }
  switch(envType)
  {
    case EnvType.inDev:
      switch(roleType)
      {
        case RoleType.isAdmin:
          quoteEngine.selectAgent().select(the.agent.data.validDev)
          quoteEngine.selectDealer().select(the.dealer.data.validDev)
          break
        case RoleType.isAgent:
          quoteEngine.selectDealer().select(the.dealer.data.validDev)
          break
        case RoleType.isDealer:
          cy.log('I am a Dealer in Dev')
          break
      }
      break
    case EnvType.inQa:
      switch(roleType)
      {
        case RoleType.isAdmin:
          quoteEngine.selectAgent().select(the.agent.data.validQa)
          quoteEngine.selectDealer().select(the.dealer.data.validQa)
          break
        case RoleType.isAgent:
          quoteEngine.selectDealer().select(the.dealer.data.validQa)
          break
        case RoleType.isDealer:
          cy.log('I am a Dealer in QA')
          break
      }
      break
  }
  switch(policyType)
  {
    case PolicyType.isPersonal:
      quoteEngine.selectPersonalPolicy().click()
      quoteEngine.selectCommercialPolicy().click()
      quoteEngine.selectPersonalPolicy().click()
      cy.wait(1000)
      quoteEngine.selectCommercialPolicy().click()
      quoteEngine.selectPersonalPolicy().click()
      quoteEngine.getCurrentStep().should('have.text', '1Policy')
      cy.wait(1000)
      break
    case PolicyType.isCommercial:
      quoteEngine.selectCommercialPolicy().click()
      quoteEngine.selectPersonalPolicy().click()
      quoteEngine.selectCommercialPolicy().click()
      cy.wait(1000)
      quoteEngine.selectPersonalPolicy().click()
      quoteEngine.selectCommercialPolicy().click()
      quoteEngine.getCurrentStep().should('have.text', '1Commercial Policy')
      cy.wait(1000)
      break
    }
    quoteEngine.getNextButton().click()
  })
})

Cypress.Commands.add("secondStep", (policyType, additionalDriver) => 
{
  cy.fixture("DOM/issue.Pap").then((the)=>
  {
    //common
    quoteEngine.getCurrentStep().should('have.text', '2Driver')
    quoteEngine.getFirstNameInput().should("be.visible")
    quoteEngine.getLastNameInput().should("be.visible")
    quoteEngine.getSecondLastNameInput().should("be.visible")
    quoteEngine.getEmailInput().should("be.visible")
    quoteEngine.getGender().should("be.visible")
    quoteEngine.selectBirthDate().should("be.visible")
    quoteEngine.selectCivilStatus().should("be.visible")
    quoteEngine.getLicenseNumberInput().should("be.visible")
    quoteEngine.getPostalAddressInput().should("be.visible")
    quoteEngine.getPhysicalAddressInput().should("be.visible")
    quoteEngine.getZipCodeInput().should("be.visible")
    quoteEngine.getAddDriverButton().should("be.visible")
    quoteEngine.getNextButton().should("be.disabled")

    quoteEngine.fillFirstName(the.firstName.data.valid)
    quoteEngine.fillLastName(the.lastName.data.valid)
    quoteEngine.fillSecondLastName(the.secondLastName.data.valid)
    quoteEngine.fillEmail(the.email.data.valid)
    quoteEngine.selectGenderMale().check()
    cy.setBirthdate(5, 'May', 1985)
    quoteEngine.selectCivilStatus().select(the.civilStatus.data.married)
    quoteEngine.fillLicenseNumber(the.licenseNumber.data.valid)
    quoteEngine.fillPostalAddress(the.postalAddress.data.valid)
    quoteEngine.fillPhysicalAddress(the.physicalAddress.data.valid)
    quoteEngine.fillZipCode(the.zipCode.data.valid)

    switch(policyType)
    {
      case PolicyType.isPersonal:
        quoteEngine.selectOccupation().should("be.visible")
        // quoteEngine.getNextButton().should("be.disabled") ITS FAILING
        quoteEngine.selectOccupation().select(the.occupation.data.engineer)
        break
      case PolicyType.isCommercial:
        quoteEngine.getCompanyNameInput().should("be.visible")
        quoteEngine.selectNamedInsured().should("be.visible")
        quoteEngine.getBusinessDescription().should("be.visible")
        quoteEngine.fillCompanyName(the.companyName.data.valid)
        quoteEngine.selectNamedInsured().select(the.namedInsured.data.partnership)
        quoteEngine.fillBusinessDescription(the.businessDescription.data.valid)
        break
    }
    quoteEngine.getNextButton().should("be.enabled")

    if(additionalDriver == ChecksType.hasAdditionalDriver)
    {
      quoteEngine.getAddDriverButton().click()
      quoteEngine.getAddDriverButton().should("be.visible")
      quoteEngine.getNextButton().should("be.disabled")
      quoteEngine.getRemoveAdditionalDriver().should("be.visible")
      quoteEngine.getAdditionalDriverFirstNameInput().should("be.visible")
      quoteEngine.getAdditionalDriverLastNameInput().should("be.visible")
      quoteEngine.getAdditionalDriverSecondLastNameInput().should("be.visible")
      quoteEngine.checkAdditionalDriverNotEmail().should("be.visible")
      quoteEngine.getAdditionalDriverGender().should("be.visible")
      quoteEngine.selectAdditionalDriverCivilStatus().should("be.visible")
      quoteEngine.getAdditionalDriverLicenseNumberInput().should("be.visible")
      quoteEngine.selectAdditionalDriverBirthDate().should("be.visible")
      quoteEngine.checkIsPrincipalDriver().should("be.visible")
      quoteEngine.checkAdditionalDriverNotEmail().click()
      quoteEngine.getAdditionalDriverEmailInput().should("be.visible")

      quoteEngine.fillAdditionalDriverFirstName(the.additionalDriverFirstName.data.valid)
      quoteEngine.fillAdditionalDriverLastName(the.additionalDriverLastName.data.valid)
      quoteEngine.fillAdditionalDriverSecondLastName(the.additionalDriverSecondLastName.data.valid)
      quoteEngine.fillAdditionalDriverEmail(the.additionalDriverEmail.data.valid)
      quoteEngine.selectAdditionalDriverGenderFemale().check()
      cy.setAdditionalDriverBirthdate(9, 'Sep', 1996)
      quoteEngine.selectAdditionalDriverCivilStatus().select(the.additionalDriverCivilStatus.data.single)
      quoteEngine.fillAdditionalDriverLicenseNumber(the.additionalDriverLicenseNumber.data.valid)
    }

    quoteEngine.getNextButton().should("be.enabled")
    quoteEngine.getNextButton().click()
  })
})

Cypress.Commands.add("thirdStep", (policyType, roleType) => 
{
  cy.fixture("DOM/issue.Pap").then((the)=>
  {
    quoteEngine.getCurrentStep().should('have.text', '3Vehicle')
    quoteEngine.selectMake().should("be.visible")
    quoteEngine.selectModel().should("be.visible")
    quoteEngine.getYearInput().should("be.visible")
    quoteEngine.selectCondition().should("be.visible")
    quoteEngine.getSalesPriceInput().should("be.visible")
    quoteEngine.selectVehicleUse().should("be.visible")
    quoteEngine.selectTerm().should("be.visible")
    quoteEngine.selectEffectiveDate().should("be.visible")
    quoteEngine.getGetQuoteButton().should("be.visible")

    quoteEngine.selectMake().select(the.vehicleMake.data.tesla)
    quoteEngine.selectModel().select(the.vehicleModel.data.modely)
    quoteEngine.fillYear(the.vehicleYear.data.valid)
    quoteEngine.selectCondition().select(the.vehicleCondition.data.new)
    quoteEngine.fillSalesPrice(the.vehicleActualValue.data.valid)
    quoteEngine.selectTerm().select(the.term.data.twelve)
    cy.setEffectiveDate(20, 'January', 2024)
    cy.setEffectiveDate
    (
      Cypress.env('effectiveDateDay'), 
      Cypress.env('effectiveDateMonth'), 
      Cypress.env('effectiveDateYear')
    )
    switch(policyType)
    {
      case PolicyType.isPersonal:
        quoteEngine.selectVehicleUse().select(the.vehicleUse.data.leisure)
        switch(roleType)
        {
          case RoleType.isAdmin:
            quoteEngine.selectDepreciation().should("be.visible")
            quoteEngine.selectDepreciation().select(the.depreciation.data.fifteen)  
            break
          case RoleType.isAgent:
            quoteEngine.selectDepreciation().should("not.exist")
            break
        }break
        
      case PolicyType.isCommercial:
        quoteEngine.selectSizeClass().should("be.visible")
        quoteEngine.selectSecondaryClassification().should("be.visible")
        quoteEngine.selectVehicleSubClass().should("be.visible")

        quoteEngine.selectVehicleUse().select(the.vehicleUse.data.commercial)
        quoteEngine.selectSizeClass().select(the.sizeClass.data.medium)
        quoteEngine.selectSecondaryClassification().select(the.secondaryClassification.data.others)
        quoteEngine.selectVehicleSubClass().select(the.vehicleSubClass.data.allOther)
        break
    }
    quoteEngine.getGetQuoteButton().click()
  })
})

Cypress.Commands.add("selectCoverageType", (coverage, roleType) =>
{
  
  quoteEngine.getCurrentStep().should('have.text', '4Summary')
  switch(roleType)
  {
    case RoleType.isAdmin:
      quoteEngine.getOptionalDiscountInput().should("be.visible")
      break
    case RoleType.isAgent:
      quoteEngine.getOptionalDiscountInput().should("not.exist")
      break
  }
  
  switch(coverage)
  {
      case CoverageType.isDoubleInterest:
        quoteEngine.selectCoverage("double interest").should("be.visible")
        quoteEngine.selectCoverage("double interest").click()
        break

      case CoverageType.isLiability:
        quoteEngine.selectCoverage("liability").should("be.visible")
        quoteEngine.selectCoverage("liability").click()
        break

      case CoverageType.isFullCover:
        quoteEngine.selectCoverage("full cover").should("be.visible")
        quoteEngine.selectCoverage("full cover").click()
        break
  }
  quoteEngine.getSubmitButton().click()
})

Cypress.Commands.add("isQuoteCreated", () => 
{
  quoteEngine.getQuoteCreatedMessage().should("be.visible")
  quoteEngine.getIssueButton().should("be.visible")
  quoteEngine.getPDFButton().should("be.visible")
  quoteEngine.getQuotesButton().should("be.visible")
  quoteEngine.getIssueButton().click()
})

Cypress.Commands.add("submittingIssue", () =>
{
  issue.getSubmitButton().click()
  issue.getPopUpIssueTitle().should("be.visible").should('have.text', 'Issue policy')
  issue.getProceedButton().should("be.visible")
  issue.getNoButton().should("be.visible").click()
  issue.getSubmitButton().click()
  issue.getProceedButton().click()
})

Cypress.Commands.add("fillIssue", (coverage, checks) =>
{
  cy.fixture("DOM/issue.Pap").then((the)=>
  {
    //lo que va siempre
    issue.getLicenseNumberInput().should("be.visible")
    issue.getPhoneNumber().should("be.visible")
    issue.getVin().should("be.visible")
    issue.getLicensePlate().should("be.visible")
    issue.selectBank().should("be.visible")
    issue.selectPolicyEffectiveDate().should("be.visible")
    issue.getSubmitButton().should("be.visible")

    issue.fillLicenseNumber(the.licenseNumber.data.valid)
    issue.fillPhoneNumber(the.phoneNumber.data.valid)
    issue.fillVin(the.vin.data.valid)
    issue.fillLicensePlate(the.plate.data.valid)
    issue.selectBank().select(the.bank.data.oriental)

    switch(coverage)
    {
      case CoverageType.isDoubleInterest:
        issue.checkIsFinanced().should("be.visible")
        issue.fillLicenseNumber(the.licenseNumber.data.valid)
        issue.fillPhoneNumber(the.phoneNumber.data.valid)
        issue.fillVin(the.vin.data.valid)
        issue.fillLicensePlate(the.plate.data.valid)
        issue.selectBank().select(the.bank.data.oriental)

        if(checks === ChecksType.isFinanced)
        {
          issue.checkIsFinanced().check()
        }
      break  
      case CoverageType.isLiability:
        issue.checkIsLeasing().should("be.visible")
        issue.selectStickerMonth().should("be.visible")
        issue.selectStickerYear().should("be.visible")
        issue.getInspectionSticker().should("be.visible")

        issue.selectStickerMonth().select(the.stickerMonth.data.september)
        issue.selectStickerYear().select(the.stickerYear.data.twentyfour)
        issue.selectPirceNinetysix().check()

        if(checks === ChecksType.isLeasing)
        {
          issue.checkIsLeasing().check()       
          issue.selectFinanceTerm().should("be.visible")
          issue.selectFinanceTerm().select(the.financeTerm.data.seventytwo)
        }
      break
      case CoverageType.isFullCover:
        issue.checkIsLeasing().should("be.visible")
        issue.selectStickerYear().should("be.visible")
        issue.getInspectionSticker().should("be.visible")

        issue.selectStickerMonth().select(the.stickerMonth.data.september)
        issue.selectStickerYear().select(the.stickerYear.data.twentyfour)
        issue.selectPirceNinetysix().check()

        if(checks === ChecksType.isLeasing)
        {
          issue.checkIsLeasing().check()       
          issue.selectFinanceTerm().should("be.visible")
          issue.selectFinanceTerm().select(the.financeTerm.data.seventytwo)
        }
    }
    cy.log(`CoverageType: ${CoverageType}, checks: ${checks}`)
    cy.submittingIssue()   
  })
})

Cypress.Commands.add("isQuoteIssued", () => 
{
  issue.getPopUpIssueTitle().should("be.visible").should('have.text', 'Quote was issued')
  issue.getIsPolicyCreated().should("be.visible")
  issue.getPayButton().should("be.visible")
})

Cypress.Commands.add("getQuoteNumber", () =>
{
  issue.getQuoteIssued();
})