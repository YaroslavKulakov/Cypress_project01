import { mobileReplenishment } from "../support/Pages/mobileReplenishment"
import { transfers } from "../support/Pages/transfers"
import { basePage } from "../support/Pages/basePage"

it('Replanishment of Ukraine mobile phone',()=>{
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('639597243')
    basePage.typeAmount('15')
    basePage.typeDebitCardData('5019555544445555', '0330', '737')
    mobileReplenishment.submitPayment()
    mobileReplenishment.checkDebitCard('5019 **** **** 5555')
    mobileReplenishment.checkDebitAmount('15')
    mobileReplenishment.checkDebitCommision('2')
    mobileReplenishment.checkDebitCommisionCurrency('UAH')

})

it('Money transfer between card',()=>{
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')
    cy.wait(8000)
    basePage.typeDebitCardData('5019555544445555', '0330', '737')
    transfers.typeRecipientCardData('6445644564456445')
    basePage.typeAmount('23')
    transfers.typeComment('Money transfer between card')
    transfers.submitPayment()

})