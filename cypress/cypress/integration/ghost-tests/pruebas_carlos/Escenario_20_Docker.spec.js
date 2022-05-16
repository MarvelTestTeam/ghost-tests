/// <reference types="cypress" />

context('Actions', () => {
    beforeEach(() => {
      cy.visit('http://localhost:3001/ghost/#/signin')
    })
  
    // https://on.cypress.io/interacting-with-elements
  
    it('Valid create member email incorrect', () => {
      // https://on.cypress.io/type
      cy.get('input[name="identification"]').type('javierpita17@hotmail.com')
      cy.screenshot();
              cy.get('input[name="password"]').type('Cpita2018*')
              cy.screenshot();
              cy.get(('[id=ember12]')).click()
              cy.wait(5000)
              cy.contains('a', 'Staff').click()
              cy.wait(2000)
              cy.screenshot();
              cy.contains('Invite people').click()
              cy.wait(2000)
              cy.screenshot();
              cy.contains('button', 'Send invitation now').click()
              cy.wait(2000)
              cy.contains('Please enter an email.').should('be.visible')
              cy.wait(2000)
              cy.screenshot();
         
              
    })
  })