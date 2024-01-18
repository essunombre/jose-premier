import QuoteEngine from "./QuoteEngine"
class Issue
{
    quoteEngine = new QuoteEngine()

    getInputFieldInIssue(selector) {
      // Accessing the getInputField method from QuoteEngine
      return this.quoteEngine.getInputField(selector);
    }
  
    fillInputFieldInIssue(selector, value) {
      // Accessing the fillInputField method from QuoteEngine
      this.quoteEngine.fillInputField(selector, value);
    }

    checkIsFinanced() 
    {
      return cy.get('#IsPolicyFinanceCheckbox')
    }

    selectStickerMonth()
    {
      return cy.get("select#InspectionStickerExpireMonth")
    }

    selectStickerYear()
    {
      return cy.get("select#InspectionStickerExpireYear")
    }

    getInspectionSticker()
    {
      return cy.get("[type='radio'][name='InspectionStickerPrice']")
    }

    selectPirceNinetysix()
    {
      return cy.get("[type='radio'][name='InspectionStickerPrice'][value='96.53']")
    }

    selectPriceHundredfourtyfour()
    {
      return cy.get("[type='radio'][name='InspectionStickerPrice'][value='144.3']")
    }

    selectPriceCustom()
    {
      return cy.get("[type='radio'][name='InspectionStickerPrice'][value='custom']")
    }

    getLicenseNumberInput() 
    {
      return this.getInputFieldInIssue("#LicenseNumber")
    }

    fillLicenseNumber(value) 
    {
      this.fillInputFieldInIssue("#LicenseNumber", value)
    }
    
    getPhoneNumber() 
    {
      return this.getInputFieldInIssue("[name='PhoneNumber']")
    }

    fillPhoneNumber(value) 
    {
      this.fillInputFieldInIssue("[name='PhoneNumber']", value)
    }
    
    getVin() 
    {
      return this.getInputFieldInIssue("#Vin")
    }

    fillVin(value) 
    {
      this.fillInputFieldInIssue("#Vin", value)
    }
    
    getLicensePlate() 
    {
      return this.getInputFieldInIssue("#Plate")
    }

    fillLicensePlate(value) 
    {
      this.fillInputFieldInIssue("#Plate", value)
    }
    
    selectBank() 
    {
      return cy.get("select#Bank")
    }

    selectPolicyEffectiveDate()
    {
      return cy.get('.mantine-emotion-cache-DatePickerInput-input')
    }

    checkIsLeasing()
    {
      return cy.get('#IsLeasingCheckbox')
    }

    selectFinanceTerm()
    {
      return cy.get('#FinanceTerm')
    }
    
    getPopUpIssueTitle()
    {
      return cy.get('#swal2-title')
    }
    
    getSubmitButton()
    {
      return cy.get('button[type="submit"]')
    }
    
    getProceedButton()
    {
      return cy.get('.swal2-confirm')
    }
    
    getNoButton()
    {
      return cy.get('.swal2-deny')
    }

    getPayButton()
    {
      return cy.contains('Pay')
    }    

    getIsPolicyCreated()
    {
      return cy.contains("Policy was issued")
    }

    getQuoteIssued()
    {
      cy.get('p.mt-1').invoke('text').then((text) => {
        // 'text' variable now contains the text content of the selected element
        cy.log(text); // or use the text as needed in your test
      });
      return text;
    }
}
export default Issue