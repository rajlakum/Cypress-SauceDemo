import { registrationPage } from "../../pages/registration_page"
import registerData from "../../fixtures/registerData.json"

// Create Object to access the class and methods from imported module

const registerObj = new registrationPage()

describe('Test Automation Registration', ()=>{

    registerData.forEach( (userdata) =>{ //looping thru json file to read data one by one

    it(`Registration Page  ${userdata.emailAddress}`, () =>{

        registerObj.openURL()
        registerObj.enterFirstName(userdata.firstName)
        registerObj.enterLastName(userdata.lastName)
        registerObj.enterEmailAddress(userdata.emailAddress)
        registerObj.enterPassword(userdata.password)
        registerObj.clickButton()

    }) //it block
    }) //for each block


})// describe block