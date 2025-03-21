/// <reference types = "cypress"/>


describe('Get Elements',()=>{

    it('Encontrar/selecionar elementos', () => {
        // get() - selecionar elementos
        cy.visit('/')
        .get('.header-logo')

        // contains() - para encontrar elementos por texto
        // geralmente diminuimos o escopo com um get()
        cy.get('#top_header').as('cabecalho')
        .contains('Login')

        // find() - para encontrar elementos
        // geralmente diminuimos o escopo com um get()
        cy.get('#top_header')
        .find('.fa-user')

        //as() - alias
        cy.get('@cabecalho')
        .find('.fa-user')
    })

})