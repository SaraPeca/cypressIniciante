/// <reference types = "cypress"/>

describe('Asserts / Verificações', () =>{
    it('Verificar se está visível', () => {
        cy.visit('/')
        cy.get('.header-logo')

        cy.get('.fa-user')
        .click()

        cy.get('.account_form > h3')
        .should('be.visible').and('have.text','Login')
        
    });

    it.only('Verificar usando o expeted', () => {
        cy.visit('/')
        cy.get('.header-logo')

        cy.get('.fa-user')
        .click()

        cy.get('.account_form > h3')
        .then((element) =>{
            expect(element.text()).eq('Login')
            expect(element).to.be.visible
            expect(element).not.be.disabled
        })
    });
})