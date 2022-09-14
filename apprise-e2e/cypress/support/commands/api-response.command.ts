import { StatusCodes } from 'http-status-codes/build/es';
Cypress.Commands.add('isBadRequest', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.BAD_REQUEST);
});
Cypress.Commands.add('isAuthError', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.UNAUTHORIZED);
});

Cypress.Commands.add('isValidateError', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.UNPROCESSABLE_ENTITY);
});

Cypress.Commands.add('isForbiddenError', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.FORBIDDEN);
});

Cypress.Commands.add('isNoContent', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.NO_CONTENT);
});

Cypress.Commands.add('isNotFound', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.NOT_FOUND);
});

Cypress.Commands.add('isCreated', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.CREATED);
});

Cypress.Commands.add('isOk', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.statusCode').should('eq', StatusCodes.OK);
});

Cypress.Commands.add('getResponseBody', { prevSubject: true }, (subject) => {
    return cy.wrap(subject).its('response.body');
});
