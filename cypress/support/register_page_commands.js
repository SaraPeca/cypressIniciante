/// <reference types = "cypress"/>
import { elements } from './register_page_elements';

//Ações/métodos/funções
Cypress.Commands.add('PreencherNome', (nome) => {
    cy.get(elements.fields.userName).type(nome)
})

Cypress.Commands.add('PreencherEmail', (email) => {
    cy.get(elements.fields.userEmail).type(email)
})

Cypress.Commands.add('PreencherSenha', (senha) => {
    cy.get(elements.fields.userPassword).type(senha)
})

Cypress.Commands.add('CadastrarUsuario', () => {
    cy.get(elements.buttons.register).click()
})

Cypress.Commands.add('ChecarMensagemErro', (mensagem) => {
    cy.get(elements.messages.error).should('have.text',mensagem)
})

Cypress.Commands.add('ChecarCadastroSucesso', (nome) =>{
    cy.get(elements.messages.sucessTitle,{timeout: 3000}).should('have.text', 'Cadastro realizado!') //cyget com option, tempo de espera
    cy.get(elements.messages.sucessSubTitle).should('have.text', `Bem-vindo ${nome}`)
    cy.get(elements.buttons.confirm).click()
    cy.get(elements.fields.userLogged).should('contain', nome)
})