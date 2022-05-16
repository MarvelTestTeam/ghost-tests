/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[name="identification"]').type('afiffe.retamozo.a@gmail.com')
            cy.get('input[name="password"]').type('Asdfg12345!')
            cy.get(('[id=ember11]')).click()
            cy.contains(('Tags')).click()
            cy.get(('.gh-tag-list-name')).click()
            cy.get(('.input-color > .gh-input')).type('tabhti')
            cy.get(('[id=ember66]')).click()
            
            
          
            
            
  })


})