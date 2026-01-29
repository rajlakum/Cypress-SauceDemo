import { Search } from "../../pages/search";

const searchObj = new Search()
import data from "../../fixtures/registerData.json"

describe ('Search Add Cart', () =>{

    data.forEach( (userdata) =>{


            // beforeEach( ()=>{


            // cy.login(userdata.emailAddress, userdata.password)


            // });

        it(`search ${userdata.item}`, () =>{

            cy.visit('/')

            searchObj.searchProduct(userdata.item)
            searchObj.selectProduct()
            cy.intercept('GET', '/cart.js').as('cart')
            searchObj.addCart()
            cy.wait('@cart')
            searchObj.clickCheckOut()
            searchObj.verifySucessMessage().should('contain',userdata.item)

        })// it block

   
    }) // for each block



}) // describe block