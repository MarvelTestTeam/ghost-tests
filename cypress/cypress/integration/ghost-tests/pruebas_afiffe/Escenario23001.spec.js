/// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3001/ghost/#/signin')
  })

  // https://on.cypress.io/interacting-with-elements

  it('.type() - type into a DOM element', () => {
    // https://on.cypress.io/type
    cy.get('input[name="identification"]').type('jorgeballe@gmail.com')
    cy.screenshot();
            cy.get('input[name="password"]').type('Asdfg12345!')
            cy.screenshot();
            cy.get(('[id=ember12]')).click()
            cy.screenshot();
            cy.get(('[id=ember29]')).click()
            cy.screenshot();
            cy.get('.koenig-editor__editor-wrapper').type('Kraken es una herramienta de código abierto para realizar pruebas automáticas del tipo E2E con aplicaciones móviles para Android y aplicaciones WEB. Esta soporta escenarios donde es requerida la intercomunicación entre usuarios o dispositivos. El proyecto fue desarrollado haciendo uso de Appium y Cucumber, que son librerías disponibles en Node.js para realizar pruebas por medio de una notación que asemeja el lenguaje natural, las cuales permiten crear escenarios a través de la especificación de ejemplos.')
            cy.screenshot();
            cy.contains(('Posts')).click()
            cy.screenshot();
            cy.get(('#ember136 > .gh-nav-viewname')).click()
            cy.screenshot();
            
  })


})