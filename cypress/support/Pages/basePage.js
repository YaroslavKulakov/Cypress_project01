export class BasePage{

    open(url){
        cy.visit(url, ({ timeout: 20000 }))
    }
    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
        .clear()
        .type(amount)
    }
    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        cy.get('[data-qa-node="expiredebitSource"]')
        .type(expDate)
        cy.get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }
}

export const basePage = new BasePage()