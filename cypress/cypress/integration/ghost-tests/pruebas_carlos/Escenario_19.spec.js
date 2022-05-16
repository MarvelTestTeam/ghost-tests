/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:2368/ghost/#/signin')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Valid create member no email', () => {
      // https://on.cypress.io/type
      cy.get('input[name="identification"]').type('javierpita17@hotmail.com')
      cy.screenshot();
              cy.get('input[name="password"]').type('Cpita2018*')
              cy.screenshot();
              cy.get(('[id=ember11]')).click()
              cy.wait(2000)
              cy.contains('a', 'Members').click()
              cy.wait(2000)
              cy.screenshot();
              cy.contains('New member').click()
              cy.wait(2000)
              cy.screenshot();
              cy.get('[disabled]').click({force: true})
              cy.get('input[id="member-name"]').type('Carlos Javier Pita')
              cy.wait(2000)
              cy.screenshot();
              cy.get('input[id=member-email]').type('carlos@-+*')
              cy.wait(2000)
              cy.get('.gh-main').scrollTo('top')
              cy.screenshot();
              cy.contains('button', 'Save').click()
              cy.wait(2000)
              cy.contains('Invalid Email.').should('be.visible')
              cy.wait(2000)
              cy.screenshot();
         
              
    })
  })