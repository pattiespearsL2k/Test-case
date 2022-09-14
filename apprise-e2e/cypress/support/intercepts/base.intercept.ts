export abstract class BaseIntercept {
    post(path) {
        return cy.intercept({ method: 'POST', path: path });
    }

    put(path) {
        return cy.intercept({ method: 'PUT', path: path });
    }

    get(path) {
        return cy.intercept({ method: 'GET', path: path });
    }

    delete(path) {
        return cy.intercept({ method: 'DELETE', path: path });
    }
}
