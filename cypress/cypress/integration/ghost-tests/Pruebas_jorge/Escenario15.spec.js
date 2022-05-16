/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[name="identification"]').type('afiffe.retamozo.a@gmail.com')
    cy.screenshot();
            cy.get('input[name="password"]').type('Asdfg12345!')
            cy.screenshot();
            cy.get(('[id=ember11]')).click()
            cy.screenshot();
            cy.contains(('Tags')).click()
            cy.screenshot();
            cy.contains(('prueba')).click()
            cy.screenshot();
            cy.get(('.gh-canvas > :nth-child(2) > .gh-btn > span')).click()
            cy.screenshot();
            cy.get(('.modal-content')).contains('Delete').click()
            cy.screenshot();
            
            
            
            
            
          
            
            
  })


})