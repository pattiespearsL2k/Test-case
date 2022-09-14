import { END_POINTS } from '@constants/endpoints.constant';

export class BaseForgotPassword {
    constructor() {
        cy.verifyTitle('Password Recovery');
        cy.verifyUrlPath(END_POINTS.FORGOT_PASSWORD);
    }

    get emailTXT() {
        return cy.getInputByName('email');
    }

    get sendPassResetBTN() {
        return cy.getButtonByName('Send password reset link');
    }

    get backToLoginLink() {
        return cy.contains('a', 'Back to login');
    }

    get checkYourEmailTXT() {
        return cy.contains('Check your email !');
    }

    get backToLinkBTN() {
        return cy.getButtonByName('Back to login');
    }
}
