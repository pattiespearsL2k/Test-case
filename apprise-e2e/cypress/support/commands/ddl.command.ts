import { generateData } from '@helpers/generate-data.helper';

function getDLLValues(index: number) {
    let options: string[] = [];
    return cy
        .get('ul[class="multiselect__content"]')
        .eq(index)
        .find('li[class="multiselect__element"]')
        .should('be.visible')
        .children()
        .each((e) => {
            cy.wrap(e)
                .invoke('text')
                .then((text) => {
                    options.push(text.trim());
                });
        })
        .then(() => {
            cy.wrap(options);
        });
}
Cypress.Commands.add('getDefaultDDLValue', (index: number = 0) => {
    return cy
        .get('span[class="multiselect__single"]')
        .eq(index)
        .find('span')
        .last()
        .invoke('text')
        .then((text) => {
            cy.wrap(text);
        });
});
Cypress.Commands.add('getDDLList', { prevSubject: 'optional' }, (subject, index: number = 0) => {
    if (subject) {
        return cy.wrap(subject).get('.multiselect__select').eq(index).parent();
    }
    return cy.get('.multiselect__select').eq(index).parent();
});
Cypress.Commands.add('getDDLListByLabel', (label: string) => {
    return cy.contains('label', label).next().find('.multiselect__select').parent();
});

Cypress.Commands.add('getDDLValues', (index: number = 0) => {
    cy.getDDLList(index).click({ force: true });
    cy.wait(300);
    return getDLLValues(index);
});
Cypress.Commands.add('selectOptionDDLByValue', (option: string, index: number) => {
    cy.getDDLList(index).click({ force: true });
    cy.wait(400);
    return cy
        .get('ul[class="multiselect__content"]')
        .should('be.exist')
        .eq(index)
        .find('li[class="multiselect__element"]')
        .should('be.visible')
        .children()
        .each((e) => {
            cy.wrap(e)
                .invoke('text')
                .then((text) => {
                    if (text.trim() === option) {
                        cy.wait(300);
                        cy.wrap(e).click();
                    }
                });
        });
});

Cypress.Commands.add('getSelectedOptionsInMultiSelectDDL', (index: number = 0) => {
    const options: string[] = [];
    cy.getDDLList(index)
        .find('span.multiselect__tag')
        .each((ele) => {
            options.push(ele.text().trim());
        });
    return cy.wrap(options);
});
Cypress.Commands.add('removeSelectedOptionInMultiSelectDDL', (value: string, index: number = 0) => {
    cy.getDDLList(index).find(`span.multiselect__tag:contains("${value}")`).find(`i.multiselect__tag-icon`).click();
});

Cypress.Commands.add('searchOnMultiSelectDDL', (value: string, index: number) => {
    cy.getDDLList(index).find('.multiselect__tags').click().fillIn(value);
});

Cypress.Commands.add('getDDLValuesAvailable', (index: number) => {
    return getDLLValues(index);
});

Cypress.Commands.add('getNumberOfSelectedOptionsInMultiSelectDDL', (index: number) => {
    return cy.getSelectedOptionsInMultiSelectDDL(index).then((options: string[]) => {
        let total = options.length;
        cy.getDDLList(index)
            .find('.multiselect__tags')
            .then((ele) => {
                const descendant = ele.find('strong.multiselect__strong');
                if (descendant.length) {
                    total += parseInt(descendant.text());
                }
            })
            .then(() => new Cypress.Promise((resolve) => resolve(total)));
    });
});

Cypress.Commands.add('removeAllItemsOnMultiSelectDDL', (ddlIndex: number = 0) => {
    cy.getDDLList(ddlIndex)
        .find('i.multiselect__tag-icon')
        .then(($icon) => {
            if ($icon.length) {
                cy.wrap($icon).first().click();
                if ($icon.length > 1) cy.removeAllItemsOnMultiSelectDDL(ddlIndex);
            }
        });
});

Cypress.Commands.add('verifySearchFunctionOnMultiSelectDDL', (searchedValue: string, ddlIndex: number = 0) => {
    cy.searchOnMultiSelectDDL(searchedValue, ddlIndex);
    cy.getDDLValuesAvailable(ddlIndex).then((options: string[]) => {
        options.forEach((option) => {
            expect(option.toLowerCase()).to.be.include(searchedValue.toLowerCase());
        });
    });
});

Cypress.Commands.add('verifySelectedItemsOnMultiSelectDDL', (searchedValues: string[], ddlIndex: number = 0) => {
    searchedValues.forEach((value) => {
        cy.selectOptionDDLByValue(value, ddlIndex);
    });
    cy.getSelectedOptionsInMultiSelectDDL(ddlIndex).should('deep.equal', searchedValues);
});

Cypress.Commands.add('verifyRemoveFunctionOnMultiSelectDDL', (searchedValues: string[], ddlIndex: number = 0) => {
    const removedValue = generateData.getRandomItemInArray(searchedValues);
    searchedValues.forEach((value) => {
        cy.selectOptionDDLByValue(value, ddlIndex);
    });
    searchedValues.splice(searchedValues.indexOf(removedValue), 1); //remove removedValue
    cy.removeSelectedOptionInMultiSelectDDL(removedValue, ddlIndex);
    cy.getSelectedOptionsInMultiSelectDDL(ddlIndex).should('deep.equal', searchedValues);
});
