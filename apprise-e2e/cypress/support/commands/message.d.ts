declare namespace Cypress {
    interface Chainable {
        hasToast<S>(content: string): Chainable<S>;

        hasValidationMessage<S>(content: string): Chainable<S>;
    }
}
