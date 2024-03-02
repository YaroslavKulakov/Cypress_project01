

// it('by id', () =>{
//         cy.visit("https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0")

//         cy.get('#p-search').click()
// })

// it('by class', () =>{
//     cy.visit("https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0")

//     cy.get('.mw-list-item')
// })

// it('by tag', () =>{
//     cy.visit("https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0")

//     cy.get('nav')
// })

// it.only('by tag value', () =>{
//     cy.visit("https://uk.wikipedia.org/wiki/%D0%93%D0%BE%D0%BB%D0%BE%D0%B2%D0%BD%D0%B0_%D1%81%D1%82%D0%BE%D1%80%D1%96%D0%BD%D0%BA%D0%B0")

//     cy.get('[title="Сховати"][onclick="mw.centralNotice.hideBanner();return false;"]')
// })

it('Using get with find end eq', () =>{
        cy.visit("https://next.privat24.ua/deposit/open")
        cy.get('.navMenu_QG5K9Dh6AQ', { timeout: 10000 }).find('div').find('[rel="noopener noreferrer"]').eq(1)
    })

it.only('Using get with find end eq', () =>{
        cy.visit("https://next.privat24.ua/deposit/open")
        cy.get('footer', { timeout: 10000 }).find('div').find('.control').eq(0).find('a').eq(2).check()
    })    




    