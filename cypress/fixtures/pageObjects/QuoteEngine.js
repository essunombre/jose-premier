class QuoteEngine
{
    getInputField(selector) 
    {
        return cy.get(`input${selector}`);
    }

    fillInputField(selector, value) 
    {
        const field = this.getInputField(selector)
        field.clear().type(value)
    }

    verifyUser()
    {
        return cy.get('.mantine-emotion-cache-Text-root')
    }

    //1. Quote Engine
    getQuoteEngineView()
    {
        return cy.contains('Quote Engine')
    }

    selectPersonalPolicy()
    {
        return cy.contains('div[role="none"] [id^="headlessui-label"]', 'Personal')
    }

    selectCommercialPolicy()
    {
        return cy.contains('div[role="none"] [id^="headlessui-label"]', 'Commercial')
    }

    selectAgent()
    {
        return cy.get("select#Agent\\.Id")
    }

    selectDealer()
    {
        return cy.get("select#Dealer\\.Id")
    }
    
    getOptionalDiscountInput() 
    {
        return this.getInputField('#OptionalDiscount')
    }
    
    fillOptionalDiscount(value) 
    {
        this.fillInputField('#OptionalDiscount', value)
    }
    
    getNextButton()
    {
        return cy.contains('Next')

    }

    //2. Driver - PersonalInformation form Personal
    getFirstNameInput() 
    {
        return this.getInputField('#Prospect\\.Name\\.FirstName')
    }

    fillFirstName(value) 
    {
        this.fillInputField('#Prospect\\.Name\\.FirstName', value)
    }

    getLastNameInput() 
    {
        return this.getInputField('#Prospect\\.Name\\.LastName')
    }

    fillLastName(value) 
    {
        this.fillInputField('#Prospect\\.Name\\.LastName', value)
    }

    getSecondLastNameInput() 
    {
        return this.getInputField('#Prospect\\.Name\\.SecondLastName')
    }

    fillSecondLastName(value) 
    {
        this.fillInputField('#Prospect\\.Name\\.SecondLastName', value)
    }

    getEmailInput() 
    {
        return this.getInputField('#Prospect\\.Email');
    }

    fillEmail(value) {
        this.fillInputField('#Prospect\\.Email', value);
    }

    getGender()
    {
        return cy.get("[type='radio'][name='Prospect.Gender']")
    }

    selectGenderMale()
    {
        return cy.get("[type='radio'][name='Prospect.Gender'][value='1']")
    }

    selectGenderFemale()
    {
        return cy.get("[type='radio'][name='Prospect.Gender'][value='2']")
    }
    
    selectBirthDate()
    {
        return cy.get('#cal-Prospect\\.BirthDate')
    }

    selectYearDatePickerBirthday()
    {
        return cy.get('.mantine-emotion-cache-CalendarHeader-calendarHeaderLevel')
    }

    selectPreviousDatePickerBirthdate()
    {
        return cy.get('button[data-previous="true"]')
    }

    selectNextiDatePickerBirthdate()
    {
        return cy.get('button[data-next="true"]')
    }

    availableYearsBirthday()
    {
        return cy.get('.mantine-emotion-cache-YearsList-yearsListCell')
    }

    selectAvailableYearsBirthday()
    {
        return cy.get('.mantine-emotion-cache-YearsList-yearsListCell > :not([data-disabled="true"])')
    }

    selectAvailableMonthsBirthday()
    {
        return cy.get('.mantine-emotion-cache-MonthsList-monthsListCell > :not([data-disabled="true"])')
    }

    selectAvailableDaysBirthday()
    {
        return cy.get('.mantine-emotion-cache-Month-monthCell > :not([data-outside="true"])')
    }

    selectCivilStatus()
    {
        return cy.get("select#Prospect\\.CivilStatus")
    }

    getLicenseNumberInput() 
    {
        return this.getInputField("#Prospect\\.LicenseNumber")
    }

    fillLicenseNumber(value) 
    {
        this.fillInputField("#Prospect\\.LicenseNumber", value)
    }

    getPostalAddressInput() 
    {
        return this.getInputField("#Prospect\\.POBox")
    }

    fillPostalAddress(value) 
    {
        this.fillInputField("#Prospect\\.POBox", value)
    }

    getPhysicalAddressInput() 
    {
        return this.getInputField("#Prospect\\.Address")
    }

    fillPhysicalAddress(value) 
    {
        this.fillInputField("#Prospect\\.Address", value)
    }

    getZipCodeInput() 
    {
        return this.getInputField("#Prospect\\.ZipCode")
    }

    fillZipCode(value) 
    {
        this.fillInputField("#Prospect\\.ZipCode", value)
    }

    selectOccupation() 
    {
        return cy.get("select#Prospect\\.Occupation\\.Id")
    }

    //Additional Driver
    getAddDriverButton()
    {
        return cy.contains('button', 'Add driver')
    }

    getRemoveAdditionalDriver()
    {
        return cy.contains('button', 'Remove #')
    }

    getAdditionalDriverFirstNameInput() 
    {
        return this.getInputField("#AdditionalDrivers\\.0\\.Name\\.FirstName")
    }


    fillAdditionalDriverFirstName(value)
    {
        this.fillInputField('#AdditionalDrivers\\.0\\.Name\\.FirstName', value)
    }

    getAdditionalDriverLastNameInput() 
    {
        return this.getInputField("#AdditionalDrivers\\.0\\.Name\\.LastName")
    }

    fillAdditionalDriverLastName(value)
    {
        this.fillInputField('#AdditionalDrivers\\.0\\.Name\\.LastName', value)
    }

    getAdditionalDriverSecondLastNameInput() 
    {
        return this.getInputField("#AdditionalDrivers\\.0\\.Name\\.SecondLastName")
    }

    fillAdditionalDriverSecondLastName(value)
    {
        this.fillInputField('#AdditionalDrivers\\.0\\.Name\\.SecondLastName', value)
    }

    checkAdditionalDriverNotEmail()
    {
        return cy.get('[type="checkbox"][checked][id^="mantine-"]')
    }

    getAdditionalDriverEmailInput()
    {
        return this.getInputField("#AdditionalDrivers\\.0\\.Email")
    }

    fillAdditionalDriverEmail(value)
    {
        this.fillInputField('#AdditionalDrivers\\.0\\.Email', value)
    }

    getAdditionalDriverGender()
    {
        return cy.get("[type='radio'][name='AdditionalDrivers.0.Gender']")
    }

    selectAdditionalDriverGenderFemale()
    {
        return cy.get("[type='radio'][name='AdditionalDrivers.0.Gender'][value='2']")
    }
    
    selectAdditionalDriverGenderMale()
    {
        return cy.get("[type='radio'][name='AdditionalDrivers.0.Gender'][value='1']")
    }

    selectAdditionalDriverCivilStatus()
    {
        return cy.get("select#AdditionalDrivers\\.0\\.CivilStatus")
    }

    getAdditionalDriverLicenseNumberInput() 
    {
        return this.getInputField("#AdditionalDrivers\\.0\\.LicenseNumber")
    }

    fillAdditionalDriverLicenseNumber(value) 
    {
        this.fillInputField("#AdditionalDrivers\\.0\\.LicenseNumber", value)
    }
    
    selectAdditionalDriverBirthDate()
    {
        return cy.get('#cal-AdditionalDrivers\\.0\\.BirthDate')
    }

    checkIsPrincipalDriver()
    {
        return cy.get('[type="checkbox"][name="AdditionalDrivers.0.PrincipalOperator"]')
    }

    //3. Vehicle - Vehicle Information

    selectMake()
    {
        return cy.get("select#Vehicle\\.Make\\.Id")
    }
    
    selectModel()
    {
        return cy.get("select#Vehicle\\.Model\\.Id")
    }
    
    getYearInput() 
    {
        return this.getInputField("#Vehicle\\.Year")
    }

    fillYear(value) 
    {
        this.fillInputField("#Vehicle\\.Year", value)
    }

    selectCondition()
    {
        return cy.get("select#Vehicle\\.VehicleCondition")
    }

    getSalesPriceInput() 
    {
        return this.getInputField("[name='Vehicle.ActualValue']")
    }

    fillSalesPrice(value) 
    {
        this.fillInputField("[name='Vehicle.ActualValue']", value)
    }

    getCostNewInput() 
    {
        return this.getInputField("[name='Vehicle.CostNew']")
    }

    fillCostNew(value) 
    {
        this.fillInputField("[name='Vehicle.CostNew']", value)
    }

    selectVehicleUse()
    {
        return cy.get("select#Vehicle\\.VehicleUse")
    }

    selectDepreciation()
    {
        return cy.get("select#Vehicle\\.EstimatedAnnualDepreciation")
    }

    selectTerm()
    {
        return cy.get("select#Vehicle\\.Term")
    }

    selectEffectiveDate()
    {
        return cy.get('#cal-PolicyEffectiveDate')
    }

    selectYearDatePickerEffectiveDate()
    {
        return cy.get('.mantine-emotion-cache-CalendarHeader-calendarHeaderLevel')
    }

    selectPreviousDatePickerBirthdate()
    {
        return cy.get('button[data-previous="true"]')
    }

    selectNextiDatePickerBirthdate()
    {
        return cy.get('button[data-next="true"]')
    }

    availableYearsBirthday()
    {
        return cy.get('.mantine-emotion-cache-YearsList-yearsListCell')
    }

    selectAvailableYearsBirthday()
    {
        return cy.get('.mantine-emotion-cache-YearsList-yearsListCell > :not([data-disabled="true"])')
    }

    selectAvailableMonthsBirthday()
    {
        return cy.get('.mantine-emotion-cache-MonthsList-monthsListCell > :not([data-disabled="true"])')
    }

    selectAvailableDaysBirthday()
    {
        return cy.get('.mantine-emotion-cache-Month-monthCell > :not([data-outside="true"])')
    }


    //4. Summary
    selectCoverage(option) {
        return cy.contains('h3', option, { matchCase: false })
            .parent()
            .parent()
            .find('button:contains("Select")');
    }

    //Quote Created
    getQuoteCreatedMessage()
    {
        return cy.contains("Quote Created")
    }

    getIssueButton()
    {
        return cy.contains("Issue")
    }

    getPDFButton()
    {
        return cy.contains("Summary (PDF)")
    }

    getQuotesButton()
    {
        return cy.contains("Quotes")
    }

    getNextButton()
    {
        return cy.get('button.text-white.bg-brand-500:contains("Next")')
    }

    getGetQuoteButton()
    {
        return cy.get('button.text-white.bg-brand-500:contains("Get quote")')
    }

    getCurrentStep()
    {
        return cy.get('a[aria-current="step"]')
    }

    getSubmitButton()
    {
        return cy.get('button.text-white.bg-brand-500:contains("Submit")')
    }

    logOutButton()
    {
        return cy.get('.tabler-icon-logout')
    }    
    //Commmercial:
    // 2. Driver - PersonalInformation NO OCCUPATION
    getCompanyNameInput()
    {
        return this.getInputField('#Prospect\\.CompanyName')
    }

    fillCompanyName(value)
    {
        this.fillInputField('#Prospect\\.CompanyName', value)
    }
    
    selectNamedInsured()
    {
        return cy.get("select#Prospect\\.NamedInsured")
    }
    
    getBusinessDescription()
    {
        return this.getInputField('#Prospect\\.BusinessDescription')
    }

    fillBusinessDescription(value)
    {
        this.fillInputField('#Prospect\\.BusinessDescription', value)
    }

    //3. Vehicle - Vehicle Information Commercial NO YEARLY Depreciation
    selectSizeClass()
    {
        return cy.get("select#Vehicle\\.SizeClass")
    }

    selectSecondaryClassification()
    {
        return cy.get("select#Vehicle\\.SecondaryClassification")
    }

    selectVehicleSubClass()
    {
        return cy.get("select#Vehicle\\.SubClass")
    }

    // OnlyPP
    selectPassengerUse()
    {
        return cy.get("select#Vehicle\\.PassengerUse")
    }

    selectOperatorExperience()
    {
        return cy.get("select#Vehicle\\.OperatorExperience")
    }
}
export default QuoteEngine