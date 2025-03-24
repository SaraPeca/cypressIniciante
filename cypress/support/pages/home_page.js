/// <reference types = "cypress"/>
//usando funções em js
export default{
    acessarPaginaCadastro(){
        cy.visit('/')
        cy.get('.header-logo')

        cy.get('.right_list_fix')
        .contains('Cadastro').click()

        cy.get('#user').should('be.visible')
    }
}