//Aqui US es User story y el tituolo de la misma
describe('US # 1 : I am the name of the User Story', () =>
{
    before('Precondicion: Here I will write one precondition or more, el before each es mas utilizado', ()=> 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')//direct action command
    })
    //it is a test case, NO cucumnber!
    //El test case #1 hace referencai al primer test case 
    it('US#33 | TC#1 Here I can write the Test Case', ()=> 
    {
        cy.get('#openwindow')
            .click()
    })
    it('US#33 | TC#2 Here I can write the Test Case', ()=> 
    {
        cy.get('#openwindow')
            .click()
    })
})