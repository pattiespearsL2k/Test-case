declare namespace Cypress {
    interface Chainable {
        /**
         * Get default value of DDL
         *
         * @param index
         */
        getDefaultDDLValue<S>(index?: number): Chainable<any>;

        /**
         * Get DDL list
         *
         * @param index
         */
        getDDLList<S>(index?: number): Chainable<any>;

        /**
         * Get DDL list via label
         *
         * @param label
         */
        getDDLListByLabel<S>(label: string): Chainable<any>;

        /**
         * Get all DDL values
         *
         * @param index
         */
        getDDLValues<S>(index?: number): Chainable<any>;

        /**
         * Select DDL option by value
         *
         * @param option
         * @param index
         */
        selectOptionDDLByValue<S>(option: string, index: number): Chainable<any>;

        /**
         * Select all selected options display in Multi Select DDL
         *
         */
        getSelectedOptionsInMultiSelectDDL<S>(index?: number): Chainable<any>;

        /**
         * Select selected option displays in Multi Select DDL
         *
         * @param value
         */
        removeSelectedOptionInMultiSelectDDL<S>(value: string, index?: number): Chainable<any>;

        /**
         * Search value on Multi Select DDL
         *
         * @param value
         * @param index
         */
        searchOnMultiSelectDDL<S>(value: string, index: number): Chainable<any>;

        /**
         * Get all DDL values that are available on UI
         *
         * @param index
         */
        getDDLValuesAvailable<S>(index: number): Chainable<any>;

        /**
         * Select number of selected options display in Multi Select DDL
         * @param index
         *
         */
        getNumberOfSelectedOptionsInMultiSelectDDL<S>(index?: number): Chainable<any>;

        /**
         * Verify search function on multiple DDL
         *
         * @param searchedValue
         * @param ddlIndex
         */
        verifySearchFunctionOnMultiSelectDDL<S>(searchedValue: string, ddlIndex?: number): Chainable<any>;

        /**
         * Verify multiple select DDL is able to select multi items
         * @param searchedValues
         * @param ddlIndex
         */
        verifySelectedItemsOnMultiSelectDDL<S>(searchedValues: string[], ddlIndex?: number): Chainable<any>;

        /**
         * Verify delete function on multi select DDL
         * @param searchedValues
         * @param ddlIndex
         */
        verifyRemoveFunctionOnMultiSelectDDL<S>(searchedValues: string[], ddlIndex?: number): Chainable<any>;

        /**
         * Remove all selected items on multi select DDL
         *
         */
        removeAllItemsOnMultiSelectDDL<S>(ddlIndex?: number): Chainable<any>;
    }
}
