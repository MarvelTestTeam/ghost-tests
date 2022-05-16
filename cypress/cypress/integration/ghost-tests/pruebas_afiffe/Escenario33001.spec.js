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
            cy.get(('#ember36 > .gh-nav-viewname')).click()
            cy.screenshot();
            cy.get(('.posts-list > :nth-child(5)')).click()
            cy.screenshot();
            cy.get('.koenig-editor__editor-wrapper').type('Esto esta editado.')
            cy.screenshot();
            cy.contains(('Update')).click()
            cy.screenshot();
            cy.get(('.gh-publishmenu-footer')).contains('Update').click()
            cy.screenshot();
            cy.contains(('Posts')).click()
            cy.screenshot();
            cy.get(('#ember347 > .gh-nav-viewname')).click()
            cy.screenshot();
            
            

            
            
            
            
  })


})