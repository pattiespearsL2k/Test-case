declare namespace Cypress {
    interface Chainable {
        /**
         * Get data in cell table
         *
         *
         */
        getDataByCell<S>(rowIndex: number, columnIndex: number, tableIndex?: number): Chainable<S>;

        /**
         * Get length of body table
         *
         *
         */
        getBodyTableLength<S>(): Chainable<S>;

        /**
         * Get headers in table
         *
         *
         */
        getHeaderTable<S>(index?: number): Chainable<S>;

        /**
         * Get header table by cell
         *
         *
         */
        getHeaderTableByCell<S>(name: string, tableIndex?: number): Chainable<S>;

        /**
         * Get cell value of body table
         *
         *
         */
        getCellBody<S>(rowIndex: number, columnIndex: number, tableIndex?: number): Chainable<S>;

        /**
         * Get row body table
         *
         *
         */
        getRow<S>(rowIndex: number, tableIndex?: number): Chainable<S>;

        /**
         * Get data by row
         *
         *
         */
        getDataByRow<S>(rowIndex: number): Chainable<S>;

        /**
         * Get data by column
         *
         *
         */
        getDataByColumn<S>(rowIndex: number, tableIndex?: number): Chainable<S>;

        /**
         * Wait for the body table visible
         *
         *
         */
        waitForBodyTableVisible<S>(tableIndex?: number): Chainable<S>;

        /**
         * Get data by row and remove data in column
         *
         *
         */
        getDataByRowExceptColumn<S>(rowIndex: number, columnIndex: number, tableIndex?: number): Chainable<S>;
    }
}
