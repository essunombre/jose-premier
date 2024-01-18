describe("US 123 | DOMpiqe", ()=>
{
    //this will do this action everytime before of each test.
    beforeEach('Precondicion Visit the page', () =>
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')//direct action command
        cy.viewport(550, 750) //this is the resolution 

    })
    it("US 123 | TC#1: Alert has the attribute Alert", () => 
    {
        //I can use this to find elements on the console $("#Dealer\\.Id")
        
        cy.get('#alertbtn')
            .click()
            .should("have.attr", "value", "Alert")
    })
    it("US 123 | TC#2: Title of element should be Switchh to alert example", () => 
    {
        //Contain es como un like have es un =
        //clases con espacio deben tener puntos
        cy.get('.pull-right')
            .should('contain.text', 'Switch To')
            .should('not.contain.text', 'Sapo Perro')
        
    })
    
})