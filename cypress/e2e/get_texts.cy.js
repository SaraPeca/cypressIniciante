/// <reference types = "cypress"/>

describe('Get texts', ()=> {
    it('Obter texto',()=>{
        cy.visit('/')
        cy.get('.top_header_left > p')
        .then((element)=>{
            console.log(element.text())
        })
    })

})