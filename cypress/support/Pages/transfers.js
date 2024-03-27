export class Transfers{
    typeDebitCardData(cardNumber, expDate, cvv){
        cy.get('[data-qa-node="numberdebitSource"]')
        .type(cardNumber)
        cy.get('[data-qa-node="expiredebitSource"]')
        .type(expDate)
        cy.get('[data-qa-node="cvvdebitSource"]')
        .type(cvv)
    }

    typeRecipientCardData (cardNumber){
        cy.get('[data-qa-node="numberreceiver"]')
        .type(cardNumber)

    }

    typeComment (comment){
        cy.get('[data-qa-node="toggle-comment"]').click()
        cy.get('[data-qa-node="comment"]')
        .type(comment)
    }
    submitPayment(){
        cy.get('[type="submit"]')
        .click()
    }

}

export const transfers = new Transfers()