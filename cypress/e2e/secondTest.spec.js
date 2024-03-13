    

it('type',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-node="phone-number"]', ({ timeout: 10000 }))
    .type(443322111)

})

it('focus',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="120"]', ({ timeout: 10000 }))
    .focus()

})

it('blur',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="120"]', ({ timeout: 10000 }))
    .focus()
    .blur()

})

it('clear',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="120"]', ({ timeout: 10000 }))
    .clear()
    .blur()
    .type(999)
    .wait(2000)
    .clear()
})

it('submit',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('form[method="post"]', ({ timeout: 10000 }))
    .submit()
})

it('click',() =>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    .get('[data-qa-value="manual"]', ({ timeout: 15000 }))
    .click()
    .wait(4000)
})

it('rightclick',() =>{
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-select-multiple')
  .select(['apples', 'oranges', 'bananas'])
  // when getting multiple values, invoke "val" method first
  .invoke('val')
  .should('deep.equal', ['fr-apples', 'fr-oranges', 'fr-bananas'])
})

it('select',() =>{
    cy.visit('https://twitter.com/i/flow/signup')
    cy.contains('Create account', ({ timeout: 15000 })).click()
    cy.get('#SELECTOR_1')
    .select('September')
    cy.get('#SELECTOR_2')
    .select('26')
    cy.get('#SELECTOR_3')
    .select('1993')
})

it('scrollIntoView',() =>{
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.get('[data-qa-value="English"]', ({ timeout: 15000 }))
    .wait(2000)
    .scrollIntoView()
})

it('scrollTo',() =>{
    cy.visit('https://next.privat24.ua/?lang=en')
    //cy.get('[data-qa-value="English"]', ({ timeout: 15000 }))
    .wait(2000)
    cy.scrollTo(0, 600)
})

it.only('trigger',() =>{
    cy.visit('https://next.privat24.ua/?lang=en')
    cy.get('[data-qa-node="menu"]', ({ timeout: 15000 }))
    .contains('Services')
    .wait(2000)
    .trigger('mouseout')
})