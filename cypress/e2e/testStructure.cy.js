/// <reference types="cypress" />

describe('Context: My First Tests', () => {
    before(() => {
        // runs once before all test cases in this describe block, like beforeClass in TestNG 
    })
    beforeEach(() => {
        // run before each test case, beforeMethod in TestNG
        cy.clearCookies();
    })
    after(() => {
        // similar to afterClass in TestNG, runs once after all tests finished
    })
    afterEach(() => {
        // similar to afterMethod in TestNG
    })
    xit('Opening a web application', () => {
        cy.visit('https://practice.cydeo.com/');
        cy.get(':nth-child(9) > a').click();
        cy.get('.nav-link').click();
    })
    it('Opening a web application on reg form page', () => {
        cy.visit('/registration_form'); 
    })
})