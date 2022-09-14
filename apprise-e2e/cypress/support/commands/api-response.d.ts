declare namespace Cypress {
    interface Chainable {
        isBadRequest(): this;

        isOk(): this;

        isAuthError(): this;

        isValidateError(): this;

        isForbiddenError(): this;

        isNoContent(): this;

        isNotFound(): this;

        isCreated(): this;

        isCreated(): this;

        getResponseBody(): any;
    }
}
