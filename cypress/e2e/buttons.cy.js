describe('Context:My first tests',()=>{
    beforeEach(()=>{
    cy.clearCookies();
    cy.visit('/multiple_buttons');
    })
    it('Check diff button actions',()=>{
        //select btn wth text
        cy.contains('Button 2').should('be.visible').click();
        cy.contains('Clicked on button two').should('be.visible');
    })
})