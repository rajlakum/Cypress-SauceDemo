export class Search {

    searchWebLocator = {

        search : '[name="q"]',//"#search-field",
        product : "img[class='product']",
        add : '#add',
        checkout: ".checkout",
        message: "div[class='six columns alpha description'] a"

    }

    searchProduct(item) {
        cy.get(this.searchWebLocator.search).clear()
        cy.get(this.searchWebLocator.search).type(item).type('{enter}')
    }

    selectProduct(){
        cy.get(this.searchWebLocator.product).first().click()
    }

    addCart() {
        cy.get(this.searchWebLocator.add).click()
        cy.wait(3000)

    }

    clickCheckOut() {
        
        cy.get(this.searchWebLocator.checkout).click()
    }
    verifySucessMessage() {
        return cy.get(this.searchWebLocator.message)
    }

}