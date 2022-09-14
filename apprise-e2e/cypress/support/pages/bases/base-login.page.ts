import { END_POINTS } from '@constants/endpoints.constant';

export class BaseLogIn {
    constructor() {
        cy.verifyTitle('Sign In');
        cy.verifyUrlPath(END_POINTS.LOGIN);
    }

    get emailTXT() {
        return cy.getInputByName('email');
    }

    get passwordTXT() {
        return cy.getInputByName('password');
    }

    get loginBTN() {
        return cy.getButtonByName('Log in');
    }

    get rememberMeCKC() {
        return cy.get('input[type="checkbox"]');
    }

    get forgotPasswordLink() {
        return cy.contains('a', 'Forgot Password');
    }

    get contactUsLink() {
        return cy.contains('a', 'Contact us');
    }
}
