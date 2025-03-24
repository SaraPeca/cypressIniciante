/// <reference types = "cypress"/>
//importar fakerjs para geração de dados
import { faker } from '@faker-js/faker';
import home_page from '../support/pages/home_page'
import { screens } from '../support/viewports';

const randomName = faker.person.fullName(); // gera nomes Rowan Nikolaus
const randomEmail = faker.internet.email(); // gera emails Kassandra.Haley@erich.biz

screens.forEach(element => {
    
    describe('Cadastro de usuário', () =>{
        //importar dados de fixtures
        const usuario = require('../fixtures/desafio_valid_data.json')

        //repitir no inicio de todos os testes
        beforeEach('Acessar página de cadastro',() =>{

            if (element != 'desktop') {
                cy.viewport(element)                
            }

            home_page.acessarPaginaCadastro() //função js

        })

        it('Validar campo nome vazio', () =>{
            cy.CadastrarUsuario()
            cy.ChecarMensagemErro('O campo nome deve ser prenchido')

        })

        it('Validar campo e-mail vazio', () =>{
            cy.PreencherNome(usuario.name)
            cy.CadastrarUsuario()

            cy.ChecarMensagemErro('O campo e-mail deve ser prenchido corretamente')

        })
        it('Validar campo email inválido', () =>{
            cy.PreencherNome(usuario.name)
            cy.PreencherEmail('teste@teste')
            cy.CadastrarUsuario()

            cy.ChecarMensagemErro('O campo e-mail deve ser prenchido corretamente')
        })

        it('Validar campo senha vazio', () =>{
            cy.PreencherNome(usuario.name)
            cy.PreencherEmail(usuario.email)
            cy.CadastrarUsuario()

            cy.ChecarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        })

        it('Validar campo senha inválida', () =>{
            cy.PreencherNome(usuario.name) //utilizando nome do arquivo de fixture
            cy.PreencherEmail(usuario.email) //utilizando email do arquivo de fixture
            cy.PreencherSenha('12345')
            cy.CadastrarUsuario()

            cy.ChecarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')
        })

        it.only('Validar cadastro realizado com sucesso', () =>{
            cy.PreencherNome(randomName) //utilizando nome gerado pelo fakerjs
            cy.PreencherEmail(randomEmail) //utilizando email gerado pelo fakerjs
            cy.PreencherSenha(usuario.senha)
            cy.CadastrarUsuario()
            cy.ChecarCadastroSucesso(randomName)
        })
    })
});