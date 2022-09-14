import { ForgotPassword } from './../../support/pages/authentication/forgot-password.page';
import { generateData } from '@helpers/generate-data.helper';
import { en } from '@languages/en.language';
import { Login } from '../../support/pages/authentication/login.page';

describe('[Login]', () => {
    let login: Login;

    beforeEach(() => {
        cy.clearCookies();
        cy.visit('/');
        login = new Login();
    });

    context('Verify UI', () => {
        it('Verify UI', () => {
            login.verifyUI();
        });
    });

    context('Verify login', () => {
        it('Verify that user can login with an existed account', () => {
            login.doLogin();
        });

        it('Verify that user cannot login with an account that does not exist in DB', () => {
            login.doLogin(generateData.getEmail());
            cy.hasValidationMessage(en.emailOrPasswordWrong);
        });

        it('Verify that the error messages appears after filling and clear the form ', () => {
            login.doLogin(generateData.getEmail());
            login.clearForm();
            [(en.emailEmpty, en.passwordEmpty)].forEach((message: string) => {
                cy.hasValidationMessage(message);
            });
        });

        it('Verify that the error message appears when logging with invalid email format', () => {
            login.doLogin(generateData.generateRandomCharacters(5));
            cy.hasValidationMessage(en.invalidEmail);
        });
    });
    context('Navigate', () => {
        it('Verify that the Forgot Password page appears after clicking on Forgot Password', () => {
            login.goToForgotPassword();
        });
    });

    context('Navigate to contact us page', () => {});
});
