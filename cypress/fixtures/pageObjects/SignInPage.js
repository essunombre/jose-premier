class SignInPage
{
    getWelcomeMessage()
    {
        return cy.contains('Welcome')
    }

    getEmailInput()
    {
        return cy.get('#username')
    }

    getPasswordInput()
    {
        return cy.get('#password')
    }
    
    fillEmail(value)
    {
        const field = cy.get('#username')
            field.clear()
            field.type(value)
        return this
    }
    
    fillPassoword(value)
    {
        const field = cy.get('#password')
            field.clear()
            field.type(value)
        return this
    }

    submit()
    {
        const button = cy.get('button[data-action-button-primary="true"]')
        button.click()
    }


}

export default SignInPage