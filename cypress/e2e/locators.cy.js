/// <reference types="cypress" />

describe('Find/get elements with diff locators', () => {
    
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
        cy.visit('/login');
    })
   
    xit('Check diff locator strategies',()=>{
        //by css locator
        cy.get("input[name='username']").type("CydeoStudent");// every statement creates an object to be interacted, and next command makes operation to the object created at the previous statement
        // by tag name

        cy.get("[type='text']").clear();
        cy.get('input').each((item, index, list)=>{
            //assert list length is two
            expect(list).to.have.length(2);
            expect(item).to.have.attr("type");
        })
        //by atributr
        cy.get('[type]');

        //class name
        //cy.get('btn btn-primary'); 
        cy.get('.btn.btn-primary'); // need to add . begining and instead of space 

        //by id
        cy.get('#wooden_spoon');

        // if I want to use text: no xpath in cypress, but it still possible with a different approach
        cy.get('button').should('contain','Login').click();
    })
    xit('Check finding elements by traveling trought DOM',()=>{
        //travel to find login btn
        //1:locate username box 2:go to parent box 3:find login btn
        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click();

    })
    it('check different assertions types',()=>{
    // Cypress itself bundles(uses) assertions provided by Chai, Sinon and jQuery libraries
    // Should Assertion: does the assertion directly on the object itself
    cy.get('#wooden_spoon').should('contain', 'Login').and('have.class', 'btn btn-primary');
    // expect assertion: creates a subject of our test(elementAnyNameYouWant), then you implement different actions
    cy.get('#wooden_spoon').then((elementAnyNameYouWant)=>{
        expect(elementAnyNameYouWant).to.have.text('Login');
        expect(elementAnyNameYouWant).to.have.class('btn btn-primary');
    })
    })
})