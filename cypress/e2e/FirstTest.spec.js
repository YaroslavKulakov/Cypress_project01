/// <reference types="cypress" />




describe('First test suite', () =>{
    context('its a first test', ()=>{

        it('First test', () =>{

            cy.visit('/')
            cy.contains('Forms').click()
            cy.contains('Form Layouts').click()
    
    
    
    
            //by tag
            cy.get('input')
            //by ID
            cy.get('#inputEmail1')
            //by class
            cy.get('.input-full-width')
            //by attrib
            cy.get('[fullwidth]')
            //by attribute and value
            cy.get('[placeholder="Email"]')
    
            //by entire class value
            cy.get('[class="input-full-width size-medium shape-rectangle"]')
    
            //by two attributes
            cy.get('[placeholder="Email"][fullwidth]')
    
            cy.get('[data-cy="imputEmail1"]')
        })

    })

    

    it('second test', () =>{

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('Sign in')
        cy.contains('[status="warning"]','Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()


    }) 
    
    it('save subject of the comand', () =>{
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain','Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain','Password')

    })

    it('extract text value', () =>{
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        //2
        cy.get('[for="exampleInputEmail1"]').then( label =>{
            const labelText = label.text()
            expect(labelText).to.equal('Email address')
        })

        //3
        cy.get('[for="exampleInputEmail1"]').invoke('text').as('labelText').should('contain', 'Email address')
        

        //4
        cy.get('[for="exampleInputEmail1"]').invoke('attr', 'class').then(classValue =>{
            expect(classValue).to.equal('label')

        })
        // 5 invoke property
        cy.get('#exampleInputEmail1').type('ykulakov@gmail.com')
        cy.get('#exampleInputEmail1').invoke('prop', 'value').should('contain', 'ykulakov@gmail.com').then (property=>{
            expect(property).to.equal('ykulakov@gmail.com')

        })
    })   
    
    it('radio buttons', () =>{
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons =>{
             cy.wrap(radioButtons).eq(0).check({force:true}).should('be.checked') 
             cy.wrap(radioButtons).eq(1).check({force:true}) 
             cy.wrap(radioButtons).eq(0).should('not.be.checked')
             cy.wrap(radioButtons).eq(2).should('be.disabled')
        })
    })
    
    it('checkboxes', () =>{
        
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        cy.get('[type="checkbox"]').uncheck({force:true})
    })  

    it.only('datePikers', () =>{
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()

        cy.contains('nb-card', 'Common Datepicker').find('input').then(input =>{
            cy.wrap(input).click()
            cy.get('.day-cell').not('.bounding-month').contains('21').click()
            cy.wrap(input).invoke('prop', 'value').should('contain','Mar 21, 2024')
        })
    })  
    
    

})
