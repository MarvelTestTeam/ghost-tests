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
            cy.get(('[id=ember26]')).click()
            cy.screenshot();
            cy.get(('.posts-list > :nth-child(5)')).click()
            cy.screenshot();
            cy.get(('.settings-menu-toggle > span > svg')).click()
            cy.screenshot();
            cy.get(('form > .gh-btn > span > svg')).click()
            cy.screenshot();
            cy.get(('#ember277')).click()
            cy.screenshot();
            cy.get(('[id=ember278]')).click()
            cy.screenshot();

            
            
            
            
  })


})