declare namespace Cypress {
    interface Chainable {
        /**
         * Clear then type
         *
         * @param text
         */
        fillIn<S>(text): Chainable<S>;
        /**
         * Login and saved session
         *
         */
        loginWithSavedSession<S>(): Chainable<any>;
        /**
         * Click on text
         *
         * @param text
         */

        clickOnText<S>(text: string): Chainable<S>;

        /**
         * Click on row table
         *
         * @param rowIndex
         * @param tableIndex
         */
        clickRowTable<S>(rowIndex: number, tableIndex?: number): Chainable<S>;

        /**
         * Get multiple aliases
         *
         * @param aliases
         */
        getMultiAliases<S>(aliases: string[]): Chainable<S>;

        /**
         * Get property of before pseudo of element
         *
         * @param property
         */
        beforePseudo<S>(property: string): Chainable<S>;

        /**
         * Get property of after pseudo of element
         *
         * @param property
         */
        afterPseudo<S>(property: string): Chainable<S>;

        /**
         * Sort header column by Asc
         *
         * @param header
         */
        sortColumnByAsc<S>(header: string, interceptAlias?: string): Chainable<S>;

        /**
         * Sort header column by Desc
         *
         * @param header
         */
        sortColumnByDesc<S>(header: string, interceptAlias?: string): Chainable<S>;

        /**
         * Upload the file
         *
         * @param fileName
         */
        upload<S>(fileName?: string): Chainable<S>;

        /**
         * Download the file by the link
         *
         * @param url
         * @param dir
         * @param fileName
         */
        downloadFile(url: string, dir: string, fileName: string);

        /**
         * Download
         *
         */
        download<S>(): Chainable<S>;

        /**
         * Download
         *
         */
        saveUserInfo<S>(): Chainable<S>;
    }
}
