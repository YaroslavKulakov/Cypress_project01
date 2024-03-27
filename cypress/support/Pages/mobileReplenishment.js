export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]',({ timeout: 20000 }))
         .type(phoneNumber)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
        .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]',({ timeout: 20000 }))
        .should('have.text', debitCard)
    }
    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
        .should('contain.text', debitAmount)
    }
    checkDebitCommision(debitCommision){
        cy.get('[data-qa-node="commission"]')
        .eq(1)
        .should('contain.text', debitCommision)
    }
    checkDebitCommisionCurrency(debitCommisionCurrency){
        cy.get('[data-qa-node="commission-currency"]')
        .should('contain.text', debitCommisionCurrency)
    }



}

export const mobileReplenishment = new MobilePhoneReplenishment()