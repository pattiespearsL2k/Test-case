import { authenticationIntercept } from '@intercepts/authentication.intercept';
import { BaseLogIn } from './../bases/base-login.page';
import { ForgotPassword } from './forgot-password.page';
export class Login extends BaseLogIn {
    constructor() {
        super();
    }

    verifyUI() {
        ['Email address', 'Password'].forEach((label1: string) => {
            cy.verifyLabel(label1);
        });
        this.emailTXT.should('be.visible').and('be.enabled').and('be.empty');
        this.passwordTXT.should('be.visible').and('be.enabled').and('be.empty');
        this.rememberMeCKC.should('not.be.checked');
        this.loginBTN.should('be.visible');
        this.forgotPasswordLink.should('be.visible');
        this.contactUsLink.should('be.visible');
    }

    doLogin(email: string = Cypress.env('EMAIL'), password: string = Cypress.env('PASSWORD')) {
        this.emailTXT.fillIn(email);
        this.passwordTXT.fillIn(password);
        authenticationIntercept.postLogin();
        this.loginBTN.click({ force: true });
    }

    clearForm() {
        this.emailTXT.clear();
        this.passwordTXT.clear();
        return this;
    }

    goToForgotPassword() {
        this.forgotPasswordLink.click();
        return new ForgotPassword();
    }

    clearEmail() {
        this.emailTXT.clear();
    }
}
