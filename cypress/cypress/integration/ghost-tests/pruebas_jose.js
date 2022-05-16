/// <reference types="cypress" />

context('Actions', () => {

    beforeEach(() => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('input[name="identification"]').type('josemani89@gmail.co')
        cy.get('input[name="password"]').type('XK6nJ3RkN!PZn@c')
        cy.get(('[id=ember11]')).click()
        cy.wait(2000)
    })
    afterEach(() => {

        cy.get('.gh-user-avatar').click()
        cy.contains('Sign out')
        cy.wait(2000)
    })

    // https://on.cypress.io/interacting-with-elements

    it('Test programar publicación Post', () => {
        // https://on.cypress.io/type

        cy.get(('[id=ember27]')).type("Prueba Post")
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.wait(2000)
        cy.get('.settings-menu-toggle > span > svg').click()
        cy.wait(2000)
        cy.contains('Publish').click()
        cy.get(':nth-child(2) > .gh-publishmenu-radio-button').click()
        cy.wait(2000)

        cy.contains('button', 'Schedule').click()
        cy.contains('button', 'Schedule').click()

        cy.get('div > .ml1').should('be.visible')

        cy.wait(2000)
        cy.contains('a', 'Posts').click()

    })
    it('Se valida la creacion de un tag ', () => {
        cy.contains('a', 'Tags').click()
        cy.wait(2000)
        cy.contains('New tag').click()
        cy.get('#tag-name').type('nuevo tag')
        cy.wait(2000)
        cy.contains('button', 'Save').click()
        cy.wait(3000)
        cy.contains('a', 'Tags').click()
        cy.wait(3000)
        cy.contains('nuevo tag').should('be.visible')
    })
    it('test creacion tag sin nombre', () => {
        cy.contains('a', 'Tags').click()
        cy.wait(2000)
        cy.contains('New tag').click()
        cy.wait(2000)
        cy.contains('button', 'Save').click()
        cy.get('.error > :nth-child(1)').should('be.visible')
    })

    it('Se valida la creacion de un tag con color  ', () => {
        cy.contains('a', 'Tags').click()
        cy.wait(2000)
        cy.contains('New tag').click()
        cy.get('#tag-name').type('tag-rojo')
        cy.get('.input-color > .gh-input').type('FF5733')
        cy.wait(2000)
        cy.contains('button', 'Save').click()
        cy.wait(3000)
        cy.contains('a', 'Tags').click()
        cy.wait(3000)
        cy.contains('tag-rojo').should('be.visible')
    })



})