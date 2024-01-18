describe('US #33 : Here I will describe the title of the UserStory', ()=>
{
    before('Precondicion: Here I will write one precondition or more', ()=> 
    {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')//direct action command
    })
    //it is a test case, NO cucumnber!
    it('US#33 | TC#1 Here I can write the Test Case', ()=> 
    {
        cy.get('#openwindow')
            .click()
    })

    
})