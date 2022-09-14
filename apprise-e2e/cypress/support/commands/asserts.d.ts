declare namespace Cypress {
    interface Chainable {
        /**
         * Verify the title of page
         *
         * @param title
         */
        verifyTitle<S>(title: string): Chainable<S>;

        /**
         * Verify the url path
         *
         * @param path
         */
        verifyUrlPath<S>(path: string): Chainable<S>;

        /**
         * Verify the url path
         *
         * @param label
         */
        verifyLabel<S>(label: string): Chainable<S>;

        /**
         * Verify download successfully
         *
         * @param fileName
         * @param timeout
         */
        verifyDownload<S>(fileName: string, timeout?: number): Chainable<S>;

        /**
         * Verify a string array is sorted
         *
         * @param sortData
         * @param isAscending === true ? verify sorted by asc : desc
         */
        verifyArrayIsSorted<S>(sortData: any[], isAscending?: boolean): Chainable<S>;

        /**
         * Verify tooltip displays
         *
         * @param isDisplayed === true ? verify displaying : not
         */
        verifyTooltipDisplays<S>(isDisplayed?: boolean): Chainable<S>;
    }
}
