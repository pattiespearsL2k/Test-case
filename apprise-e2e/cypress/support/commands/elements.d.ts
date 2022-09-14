declare namespace Cypress {
    interface Chainable {
        /**
         * Get input by selector
         *
         * @param selector
         */
        getInput<S>(selector: string): Chainable<S>;

        /**
         * Get element by data-cy attribute
         *
         * @param dataCy
         */
        getDataCy<S>(dataCy: string): Chainable<S>;

        /**
         * Get input by name input[name=abc]
         *
         * @param name
         */
        getInputByName<S>(name: string): Chainable<S>;

        /**
         * Get card by text
         *
         * @param text
         */
        getCardByText<S>(text: string): Chainable<S>;

        /**
         * Get button by name
         *
         * @param name
         */
        getButtonByName<S>(name: string): Chainable<S>;

        /**
         * Get button by selector
         *
         * @param selector
         */
        button<S>(selector: string): Chainable<S>;

        /**
         * Get close icon of pop-up modal
         *
         */
        getCloseIconModal<S>(): Chainable<S>;

        /**
         * Get tooltip inner
         *
         * @param index
         */
        getToolTipInner<S>(index?: number): Chainable<S>;

        /**
         * Get element by text
         *
         * @param text
         */
        getElementByText<S>(text: string): Chainable<any>;

        /**
         * Get tooltip inner
         *
         * @param index
         */
        getToolTip<S>(index?: number): Chainable<S>;
    }
}
