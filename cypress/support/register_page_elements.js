/// <reference types = "cypress"/>
//elementos da página de cadastro de usuário
export const elements = {
    buttons: {
        register: '#btnRegister',
        confirm: '.swal2-confirm'
    },
    fields: {
     userName: '#user',
     userEmail: '#email',
     userPassword: '#password',
     userLogged: '#userLogged'
    },
    messages: {
        error: '.errorLabel',
        sucessTitle: '#swal2-title',
        sucessSubTitle: '#swal2-html-container'
    }
}