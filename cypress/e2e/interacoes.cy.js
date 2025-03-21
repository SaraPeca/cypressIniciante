/// <reference types = "cypress"/>

describe("Interações",() => {
    it('Digitar em um campo',() => {
        cy.visit('/')
        .get('.form-control')
        .type('email@teste.com')
    })

    it('Clique duplo', () =>{
        cy.visit('/')
        .get('.fa-user').dblclick()
    })

    it('Clique normal', () =>{
        cy.visit('/')
        .get('.fa-user').click()
    })

    it('Clique com botão direito', () =>{
        cy.visit('/')
        .get('.fa-user').rightclick()
    })

    it('Pressionar ENTER', () =>{
        cy.visit('/')
        .get('.form-control')
        .type('email@teste.com{enter}')
    })

    it('Clique por coordenadas', () =>{
        cy.visit('/')
        .get('.fa-user')
        .click(100,100, {force: true})
    })

    it('Selecionar opção dropdown', () => {
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
        .contains('Checkout View Two')
        .click()

        cy.get('#country')
        .select('Colombia')
        
    });

    it('Selecionar radio button', () =>{
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
        .contains('Checkout View One')
        .click()

        cy.get('#javascript')
        .check()
    })

    it.only('Selecionar radio button pelo nome da opção', () =>{
        cy.visit('/')
        .get('.header-logo')

        cy.get('.footer_one_widget')
        .contains('Checkout View One')
        .click()      

        cy.get('#accordionExample')
        .contains('Mobile Banking')
        .click()
    })

})