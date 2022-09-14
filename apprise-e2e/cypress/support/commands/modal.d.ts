declare namespace Cypress {
    interface Chainable {
        /**
         * Get pop-up modal
         *
         * @param modalIndex
         *
         */

        getPopUpModal<S>(modalIndex?: number): Chainable<S>;
        /**
         * Get header table in modal
         *
         * @param modalIndex
         */

        getHeaderTableInModal<S>(modalIndex: number): Chainable<S>;

        /**
         * Get Cell Table in modal
         *
         * @param rowIndex
         * @param colIndex
         */
        getCellTableInModal<S>(rowIndex?: number, colIndex?: number): Chainable<S>;

        /**
         * Get cell value in table from modal
         *
         * @param rowIndex
         * @param colIndex
         */
        getCellValueTableInModal<S>(rowIndex?: number, colIndex?: number): Chainable<S>;

        /**
         * Get DDL list in modal
         *
         * @param index
         */
        getDDLListInModal<S>(index?: number): Chainable<S>;

        /**
         * Get selected option in DDL
         *
         * @param index
         */
        getSelectValueInDDLModal<S>(index?: number): Chainable<S>;

        /**
         * Get all options of DDL
         *
         * @param index
         */
        getDDLOptionsInModal<S>(index?: number): Chainable<S>;

        /**
         * Select the option in DDL modal
         *
         * @param index
         * @param option
         */
        selectOptionByValueInDDLModal<S>(option: string, index?: number): Chainable<S>;
    }
}
