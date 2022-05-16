/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/ghost/#/signin')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[name="identification"]').type('afiffe.retamozo.a@gmail.com')
    cy.screenshot();
            cy.get('input[name="password"]').type('Asdfg12345!')
            cy.screenshot();
            cy.get(('[id=ember12]')).click()
            cy.screenshot();
            cy.contains(('Tags')).click()
            cy.screenshot();
            cy.get(('#ember78 > .gh-tag-list-name')).click()
            cy.screenshot();
            cy.get(('#tag-name')).clear()
            cy.screenshot();
            cy.get(('#ember84 > span')).click()
            cy.screenshot();
            
            
          
            
            
  })


})