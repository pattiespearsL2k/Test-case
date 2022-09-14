import { MAX_TIME_OUT } from '@constants/common.constant';
import { getTexts } from '@helpers/element.helper';
const { _ } = Cypress;
Cypress.Commands.add('getPopUpModal', (modalIndex: number = 0) => {
    return cy.get('div[role="dialog"]').eq(modalIndex);
});

Cypress.Commands.add('getHeaderTableInModal', (modalIndex: number = 0) => {
    cy.getHeaderTable(modalIndex)
        .should('be.visible')
        .get('thead > tr', { timeout: MAX_TIME_OUT })
        .should('be.visible')
        .children()
        .then(getTexts)
        .then((result) => {
            cy.wrap(_.toArray(result));
        });
});

Cypress.Commands.add('getCellTableInModal', (rowIndex: number = 0, colIndex: number = 0) => {
    return cy
        .getPopUpModal()
        .get('table > tbody', { timeout: MAX_TIME_OUT })
        .find('tr', { timeout: MAX_TIME_OUT })
        .eq(rowIndex)
        .scrollIntoView()
        .find('td', { timeout: MAX_TIME_OUT })
        .eq(colIndex);
});

Cypress.Commands.add('getCellValueTableInModal', (rowIndex: number = 0, colIndex: number = 0) => {
    cy.getPopUpModal()
        .find('table > tbody', { timeout: MAX_TIME_OUT })
        .find('tr', { timeout: MAX_TIME_OUT })
        .eq(rowIndex)
        .scrollIntoView()
        .find('td', { timeout: MAX_TIME_OUT })
        .eq(colIndex)
        .invoke('text')
        .then((text) => {
            cy.wrap(text);
        });
});

Cypress.Commands.add('getDDLListInModal', (index: number = 0) => {
    return cy.getPopUpModal().find('.multiselect__select').eq(index);
});

Cypress.Commands.add('getSelectValueInDDLModal', (index: number = 0) => {
    cy.getPopUpModal()
        .find('span[class="multiselect__single"]')
        .eq(index)
        .find('span')
        .first()
        .invoke('text')
        .then((text) => {
            cy.wrap(text.trim());
        });
});

Cypress.Commands.add('getDDLOptionsInModal', (index: number = 0) => {
    cy.getDDLListInModal(index).scrollIntoView().should('be.visible').click();
    cy.getPopUpModal()
        .find('ul[class="multiselect__content"]')
        .eq(index)
        .find('li[class="multiselect__element"]')
        .should('be.visible')
        .then(getTexts)
        .then((results) => {
            cy.wrap(results);
        });
});

Cypress.Commands.add('selectOptionByValueInDDLModal', (option: string, index: number = 0) => {
    cy.getDDLListInModal(index).scrollIntoView().should('be.visible').click();
    cy.getPopUpModal();
    cy.getPopUpModal()
        .find('ul[class="multiselect__content"]')
        .eq(index)
        .find('li[class="multiselect__element"]')
        .should('be.visible')
        .children()
        .each((ele) => {
            cy.wrap(ele)
                .invoke('text')
                .then((text) => {
                    if (text.trim() === option) {
                        cy.wait(500);
                        cy.wrap(ele).find('span').click({ force: true });
                    }
                });
        });
});
