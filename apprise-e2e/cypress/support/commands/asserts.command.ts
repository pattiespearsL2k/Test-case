Cypress.Commands.add('verifyTitle', (title) => {
    cy.title().should('eq', title);
});
Cypress.Commands.add('verifyLabel', (label) => {
    cy.get('label').contains(label).scrollIntoView().should('be.visible');
});
Cypress.Commands.add('verifyUrlPath', (path) => {
    cy.url().should('include', path);
});
Cypress.Commands.add('verifyArrayIsSorted', (sortData: any[], isAscending: boolean = true) => {
    cy.wrap(sortData).should(isAscending ? 'be.ascending' : 'be.descending');
});
Cypress.Commands.add('verifyDownload', (fileName: string, timeout?: number) => {
    cy.readFile(`${Cypress.config('downloadsFolder')}/${fileName}`, { timeout }).should('exist');
});
Cypress.Commands.add('verifyTooltipDisplays', { prevSubject: 'optional' }, (subject, isDisplayed: boolean = true) => {
    const assert = isDisplayed ? 'be.visible' : 'not.exist';
    if (subject) {
        return cy.wrap(subject).find('.v-popover .trigger').should(assert);
    }
    return cy.get('.v-popover .trigger').should(assert);
});
