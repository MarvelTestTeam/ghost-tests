/// <reference types="cypress" />

context('Actions', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('input[name="identification"]').type('javierpita17@hotmail.com')
        cy.get('input[name="password"]').type('Cpita2018*')
        cy.get(('[id=ember11]')).click()
        cy.wait(2000)
    })
    afterEach(() => {

        cy.get('.gh-user-avatar').click()
        cy.contains('Sign out')
        cy.wait(2000)
    })

    // https://on.cypress.io/interacting-with-elements


    it('Create a new page', () => {
			cy.get('a[href="#/pages/"]').click()
			cy.wait(2000)
			cy.contains('span', 'New page').click()
			cy.wait(2000)
			cy.get('textarea[placeholder="Page title"]').type('Nueva página creada para test Cypress')
			cy.wait(2000)
			cy.get('.koenig-editor__editor-wrapper').type('Descripción de nueva página')
			cy.wait(2000)
			cy.contains('Publish').click()
			cy.wait(2000)
			cy.contains('button', 'Publish').click()
			cy.wait(2000)
			cy.contains('a', 'Pages').click()
			cy.wait(2000)
			cy.contains('Nueva página creada para test Cypress').should('be.visible')
			cy.wait(2000)
  })
  
  
    it('Create a new page programmed', () => {
			cy.get('a[href="#/pages/"]').click()
			cy.wait(2000)
			cy.contains('span', 'New page').click()
			cy.wait(2000)
			cy.get('textarea[placeholder="Page title"]').type('Nueva página creada y programada para test Cypress')
			cy.wait(2000)
			cy.get('.koenig-editor__editor-wrapper').type('Descripción de nueva página programada')
			cy.wait(2000)
			cy.contains('Publish').click()
			cy.get(':nth-child(2) > .gh-publishmenu-radio-button').click()
			cy.wait(2000)
			cy.contains('button', 'Schedule').click()
			cy.wait(5000)
			cy.contains('a', 'Pages').click()
			cy.wait(2000)
			cy.contains('Nueva página creada y programada para test Cypress').should('be.visible')
			cy.wait(2000)
  })
  
  
   it('Delete a page programmed', () => {
			cy.get('a[href="#/pages/"]').click()
			cy.wait(2000)
			cy.contains('Nueva página creada y programada para test Cypress').click()
			cy.wait(2000)
			cy.get('.settings-menu-toggle > span').click()
			cy.wait(2000)
			cy.get('form > .gh-btn > span').click();
			cy.wait(2000)
			cy.get('.modal-content').contains('Delete').click()
			cy.wait(3000)
			cy.contains('Nueva página creada y programada para test Cypress').should('not.exist')
			cy.wait(2000)
  })
  
  
    it('Valid create member no email', () => {
			cy.contains('a', 'Members').click()
			cy.wait(2000)
			cy.contains('New member').click()
			cy.wait(2000)
			cy.get('[disabled]').click({force: true})
			cy.get('input[id="member-name"]').type('Carlos Javier Pita')
			cy.wait(2000)
			cy.contains('button', 'Save').click()
			cy.wait(2000)
			cy.get('[disabled]').click({force: true})
			cy.contains('Please enter an email.').should('be.not.visible')
			cy.wait(2000)
  })
  
  
    it('Valid create member email incorrect', () => {
			cy.contains('a', 'Members').click()
			cy.wait(2000)
			cy.contains('New member').click()
			cy.wait(2000)
			cy.get('[disabled]').click({force: true})
			cy.get('input[id="member-name"]').type('Carlos Javier Pita')
			cy.wait(2000)
			cy.get('input[id=member-email]').type('carlos@-+*')
			cy.wait(2000)
			cy.contains('button', 'Save').click()
			cy.wait(2000)
			cy.get('[disabled]').click({force: true})
			cy.contains('Invalid Email.').should('be.not.visible')
			cy.wait(2000)
  })



})