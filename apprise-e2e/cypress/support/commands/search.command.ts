Cypress.Commands.add('search', { prevSubject: true }, (subject, text: string) => {
    cy.wrap(subject).fillIn(`${text}{enter}`);
});
Cypress.Commands.add('getSearch', (index: number = 0) => {
    return cy.getInput('placeholder*="Search"').eq(index);
});
