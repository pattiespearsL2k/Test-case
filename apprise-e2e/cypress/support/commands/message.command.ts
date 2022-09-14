Cypress.Commands.add('hasToast', (content) => {
    return cy.get('.custom-toast').contains(content).and('be.visible');
});
Cypress.Commands.add('hasValidationMessage', (content) => {
    return cy.contains(`${content}`).should('be.visible');
});
