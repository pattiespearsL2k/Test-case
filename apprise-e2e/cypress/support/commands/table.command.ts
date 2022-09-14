import { MAX_TIME_OUT } from '@constants/common.constant';
const { _ } = Cypress;
Cypress.Commands.add('getDataByCell', (rowIndex: number, columIndex: number, tableIndex: number = 0) => {
    cy.get('table > tbody', { timeout: MAX_TIME_OUT })
        .eq(tableIndex)
        .find('tr', { timeout: MAX_TIME_OUT })
        .eq(rowIndex)
        .scrollIntoView()
        .find('td', { timeout: MAX_TIME_OUT })
        .eq(columIndex)
        .invoke('text')
        .then((text) => {
            cy.wrap(text).as('bodyValue');
        });
});

Cypress.Commands.add('getCellBody', (rowIndex: number, columIndex: number, tableIndex: number = 0) => {
    cy.waitForBodyTableVisible(tableIndex);
    return cy
        .get('table > tbody', { timeout: MAX_TIME_OUT })
        .eq(tableIndex)
        .find('tr', { timeout: MAX_TIME_OUT })
        .eq(rowIndex)
        .scrollIntoView()
        .find('td', { timeout: MAX_TIME_OUT })
        .eq(columIndex);
});

Cypress.Commands.add('getHeaderTable', { prevSubject: false }, (index: number = 0) => {
    cy.get('thead > tr', { timeout: MAX_TIME_OUT })
        .eq(index)
        .should('be.visible')
        .children()
        .then(($el) => {
            return _.map($el, 'innerText').map((value) => value.trim());
        })
        .then((result) => {
            cy.wrap(_.toArray(result)).as('headerTable');
        });
});

Cypress.Commands.add('getHeaderTableByCell', (name, tableIndex: number = 0) => {
    return cy.get('thead > tr', { timeout: MAX_TIME_OUT }).eq(tableIndex).contains(name).first();
});

Cypress.Commands.add('getRow', (rowIndex: number, tableIndex: number = 0) => {
    return cy
        .get('table > tbody', { timeout: MAX_TIME_OUT })
        .eq(tableIndex)
        .find('tr', { timeout: MAX_TIME_OUT })
        .eq(rowIndex);
});

Cypress.Commands.add('getDataByRow', (rowIndex: number) => {
    let values: string[] = [];
    cy.getRow(rowIndex)
        .find('td', { timeout: MAX_TIME_OUT })
        .each((ele) => {
            values.push(ele.text());
        })
        .then(() => cy.wrap(values));
});
Cypress.Commands.add('getDataByColumn', (columnIndex: number, tableIndex: number = 0) => {
    cy.get('table')
        .eq(tableIndex)
        .find(`tbody td:nth-child(${columnIndex + 1})`)
        .then(($cells) => _.map($cells, 'innerText'))
        .then((values) => _.map(values, (value) => value.trim()))
        .then((values) => {
            cy.wrap(_.toArray(values));
        });
});

Cypress.Commands.add('waitForBodyTableVisible', (tableIndex: number = 0) => {
    cy.get('table > tbody', { timeout: MAX_TIME_OUT })
        .eq(tableIndex)
        .should('be.visible')
        .invoke('text')
        .should('not.be.empty');
});

Cypress.Commands.add('getDataByRowExceptColumn', (rowIndex: number, columIndex: number, tableIndex: number = 0) => {
    return cy
        .getRow(rowIndex, tableIndex)
        .find('td', { timeout: MAX_TIME_OUT })
        .then(($el) => {
            return _.map($el, 'innerText').map((value) => value.trim());
        })
        .then((results) => {
            _.toArray(results).splice(columIndex, 1);
            return new Cypress.Promise((resolve) => resolve(results));
        });
});
