Cypress.Commands.add('getInput', (selector) => {
    return cy.get(`input[${selector}]`);
});

Cypress.Commands.add('getDataCy', (dataCy: string) => {
    return cy.get(`[data-cy='${dataCy}']`);
});

Cypress.Commands.add('getInputByName', (name: string) => {
    return cy.getInput(`name=${name}`);
});
Cypress.Commands.add('getCardByText', (text: string) => {
    return cy.contains('div', text).should('be.visible').parent();
});

Cypress.Commands.add('getButtonByName', { prevSubject: 'optional' }, (subject, name: string) => {
    if (subject) {
        return cy.wrap(subject).contains('button', name);
    }
    return cy.contains('button', name);
});

Cypress.Commands.add('button', (selector) => {
    return cy.get(`button[${selector}]`);
});

Cypress.Commands.add('getCloseIconModal', () => {
    return cy.getPopUpModal().find('span[class*="lumen-icon"]').first();
});

Cypress.Commands.add('getToolTipInner', { prevSubject: 'optional' }, (subject, index: number = 0) => {
    if (subject) {
        return cy.wrap(subject).find('.tooltip-inner.popover-inner').eq(index);
    }
    return cy.get('.tooltip-inner.popover-inner').eq(index);
});

Cypress.Commands.add('getElementByText', { prevSubject: 'optional' }, (subject, text: string) => {
    if (subject) return cy.wrap(subject).xpath(`//*[text()='${text}']`);
    return cy.xpath(`//*[text()='${text}']`);
});

Cypress.Commands.add('getToolTip', { prevSubject: 'optional' }, (subject, index: number = 0) => {
    if (subject) {
        return cy.wrap(subject).find('.v-popover .trigger').eq(index);
    }
    return cy.get('.v-popover .trigger').eq(index);
});
