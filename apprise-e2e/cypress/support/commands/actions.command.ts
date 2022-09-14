import { Login } from './../pages/authentication/login.page';
import 'cypress-downloadfile/lib/downloadFileCommand';
const { _ } = Cypress;

Cypress.Commands.add('fillIn', { prevSubject: true }, (subject, text) => {
    cy.wrap(subject).clear().type(text);
});

Cypress.Commands.add('clickOnText', (text) => {
    cy.contains(text).click({ force: true });
});

Cypress.Commands.add('loginWithSavedSession', () => {
    cy.clearCookies();
    cy.session([], () => {
        cy.visit('/sign-in');
        new Login().doLogin();
    });
});

Cypress.Commands.add('clickRowTable', (rowIndex: number, tableIndex: number = 0) => {
    cy.get('table').eq(tableIndex).should('be.visible');
    let bodyLength = Cypress.$('tbody > tr').eq(tableIndex).length || 0;
    if (bodyLength && rowIndex < bodyLength) {
        cy.get('table > tbody').eq(tableIndex).find('tr').eq(rowIndex).click();
    }
});

Cypress.Commands.add('getMultiAliases', (aliases: string[]) => {
    let aliasValues: any[] = [];
    for (const alias of aliases) {
        cy.get(alias).then((value) => aliasValues.push(value));
    }
    return cy.wrap(aliasValues);
});

Cypress.Commands.add(
    'beforePseudo',
    {
        prevSubject: true
    },
    (subject, property) => {
        const win = subject[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(subject[0], 'before');
        return before.getPropertyValue(property).replace(/(^")|("$)/g, '');
    }
);

Cypress.Commands.add(
    'afterPseudo',
    {
        prevSubject: true
    },
    (subject, property) => {
        const win = subject[0].ownerDocument.defaultView;
        const before = win.getComputedStyle(subject[0], 'after');
        return before.getPropertyValue(property).replace(/(^")|("$)/g, '');
    }
);

Cypress.Commands.add('sortColumnByAsc', (header: string, interceptAlias?: string) => {
    cy.getHeaderTableByCell(header)
        .beforePseudo('border-bottom-color')
        .then((color) => {
            if (color === 'rgb(211, 211, 231)') {
                cy.getHeaderTableByCell(header).click();
                cy.waitForBodyTableVisible();
                if (interceptAlias) cy.wait(interceptAlias).isOk();
                cy.sortColumnByAsc(header, interceptAlias);
            }
        });
});

Cypress.Commands.add('sortColumnByDesc', (header: string, interceptAlias?: string) => {
    cy.getHeaderTableByCell(header)
        .afterPseudo('border-top-color')
        .then((color) => {
            if (color === 'rgb(211, 211, 231)') {
                cy.getHeaderTableByCell(header).click();
                cy.waitForBodyTableVisible();
                if (interceptAlias) cy.wait(interceptAlias).isOk();
                cy.sortColumnByDesc(header, interceptAlias);
            }
        });
});

Cypress.Commands.add('upload', { prevSubject: 'optional' }, (subject, fileName: string = 'upload.jpg') => {
    cy.fixture(fileName, null).as('myFixture');
    if (subject) {
        return cy.wrap(subject).find('input[type=file]').selectFile('@myFixture', { action: 'drag-drop', force: true });
    }
    return cy.get('input[type=file]').selectFile('@myFixture', { action: 'drag-drop', force: true });
});

Cypress.Commands.add('download', { prevSubject: true }, (subject) => {
    cy.window()
        .document()
        .then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () {
                    doc.location.reload();
                }, 4000);
            });
            cy.wrap(subject).click();
        });
});

Cypress.Commands.add('saveUserInfo', () => {
    cy.getCookies().then((cookies) => {
        const userInfo =
            decodeURIComponent(_.toArray(cookies).filter((item) => item?.name === 'userInfo')[0].value) || null;
        cy.writeFile('cypress/fixtures/usersInfo.json', userInfo);
    });
});

Cypress.Commands.add('loginWithSavedSession', () => {
    cy.clearCookies();
    cy.session([], () => {
        cy.visit('/');
        new Login().doLogin();
        cy.wait('@apiPostLogin').isOk();
    });
    cy.visit('/');
});
