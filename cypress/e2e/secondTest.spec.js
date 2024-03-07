   
   it('SHOULD',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[name="amount"]', ({ timeout: 20000 })).clear()
        .type(100)
        .should('have.value', 100)
        .and('be.visible')
   })

   it('Expect',()=>{
    cy.visit('https://next.privat24.ua/mobile?lang=en')
    cy.get('[name="amount"]', ({ timeout: 20000 }))
        .type(100).then( input=>{
            expect(input).to.have.value("120 "+"100")
        })
   })



it('Expect',()=>{
    cy.visit('   https://next.privat24.ua/deposit/open?lang=en')
    cy.get('[name="amount"]', ({ timeout: 20000 }))
        .type(100).then( input=>{
            expect(input).to.have.value("120 "+"100")
        })
   })

it('checked default value for deposit',()=>{
    cy.visit('https://next.privat24.ua/deposit?lang=en')
    cy.get('[data-qa-value="Euro"]', ({ timeout: 10000 }))
        .should('not.be.checked')
})


it('checked default value for deposit',()=>{
        cy.visit('https://next.privat24.ua/deposit?lang=en')
        cy.contains('My deposits', ({ timeout: 20000 }))
        .trigger('mouseover')
        .get('#archiveDeposits')
        .should('be.visible')
})      

it('checked is correct attr for button',()=>{
    cy.visit('https://next.privat24.ua?lang=en')
    cy.contains('Show cards', ({ timeout: 10000 }))
        .should('have.attr', 'type')
        .and('match', /button/)
})

it.only('checked is correct url',()=>{
    cy.visit('https://novapay.ua/korp-kultura/')
    cy.url()
        .should('eq', 'https://novapay.ua/korp-kultura/')
})