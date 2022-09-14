declare namespace Cypress {
    interface Chainable {
        /**
         * Search by text
         *
         * @param text
         */
        search<S>(text: string): Chainable<S>;
        /**
         * Get Search element
         *
         */
        getSearch<S>(index?: number): Chainable<S>;
    }
}
