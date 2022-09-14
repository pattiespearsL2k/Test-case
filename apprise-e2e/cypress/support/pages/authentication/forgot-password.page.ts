import { BaseForgotPassword } from '@pages/bases/base-forgot-password.page';
import { Login } from './login.page';

export class ForgotPassword extends BaseForgotPassword {
    constructor() {
        super();
    }

    verifyUI() {
        cy.verifyLabel('Email address');
        this.emailTXT.should('be.visible').and('be.enabled').and('be.empty');
        this.sendPassResetBTN.should('be.visible').should('be.disabled');
        this.backToLoginLink.should('be.visible');
    }

    doForgotPassword(email: string = Cypress.env('EMAIL')) {
        if (!!email) this.emailTXT.fillIn(email);
        this.sendPassResetBTN.click({ force: true });
    }

    verifyCheckYourMail() {
        this.checkYourEmailTXT.should('be.visible');
        this.backToLinkBTN.should('be.visible');
    }

    clearEmail() {
        this.emailTXT.clear();
    }

    goBackHomePageByLink() {
        this.backToLoginLink.click();
        return new Login();
    }

    goBackHomePageByBTN() {
        this.backToLinkBTN.click();
        return new Login();
    }
}
