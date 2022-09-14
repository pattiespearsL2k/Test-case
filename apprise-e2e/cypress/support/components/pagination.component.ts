class Pagination {
    getPagination(index: number = 0) {
        return cy.get('table').parent().next().eq(index);
    }

    getFirstPageBTN(index?: number) {
        return this.getPreviousPageBTN(index).prev();
    }

    getPreviousPageBTN(index?: number) {
        return this.getPagination(index).find('.prev-page').parent();
    }

    getLastPageBTN(index?: number) {
        return this.getNextPageBTN(index).next();
    }

    getNextPageBTN(index?: number) {
        return this.getPagination(index).find('.next-page').parent();
    }

    getActivePageBTN(index?: number) {
        return this.getPagination(index).find("[class*='page-item active']");
    }

    isLastPage(index?: number) {
        return new Cypress.Promise((resolve) => {
            this.getNextPageBTN(index)
                .invoke('attr', 'class')
                .then((attr) => {
                    resolve(attr.includes('disabled') ? true : false);
                });
        });
    }

    goToFirstPage(index?: number) {
        this.getFirstPageBTN(index)
            .invoke('attr', 'class')
            .then((attr) => {
                if (!attr.includes('disabled')) this.getFirstPageBTN().click();
            });
    }
}

export const pagination = new Pagination();
