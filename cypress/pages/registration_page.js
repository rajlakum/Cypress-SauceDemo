
export class registrationPage {

    //Create a weblocator Object and store each field CSS locator path
    weblocators = {
        firstName : "#first_name[type='text']",
        lastName : "#last_name[type='text']",
        emailAddress: "#email[type='email']",
        password : "#password[type='password']",
        createBtn : "input[type='submit'][value='Create']"
    }

    openURL() {
        cy.visit(Cypress.env('URL'))
    }

    //For the each CSS locator now create a function and pass the locator

    enterFirstName(firstName){
        cy.get(this.weblocators.firstName).clear()
        cy.get(this.weblocators.firstName).type(firstName)
        
    }

        enterLastName(lastName){
        cy.get(this.weblocators.lastName).clear()
        cy.get(this.weblocators.lastName).type(lastName)
        
    }

        enterEmailAddress(emailAddress){
        cy.get(this.weblocators.emailAddress).clear()
        cy.get(this.weblocators.emailAddress).type(emailAddress)
        
    }
        enterPassword(password){
        cy.get(this.weblocators.password).clear()
        cy.get(this.weblocators.password).type(password)
        
    }
        clickButton(){
        cy.get(this.weblocators.createBtn).click()
        
    }
}