import { END_POINTS } from '@constants/endpoints.constant';
import { generateData } from '@helpers/generate-data.helper';
import { en } from '@languages/en.language';
import { ForgotPassword } from '../../support/pages/authentication/forgot-password.page';

describe('[Login]', () => {
    context('Navigate to forgot password page', () => {
        let forgotPassword: ForgotPassword;

        beforeEach(() => {
            cy.visit(END_POINTS.FORGOT_PASSWORD);
            forgotPassword = new ForgotPassword();
        });

        context('Verify UI', () => {
            it('Verify UI', () => {
                forgotPassword.verifyUI();
            });
        });
        context('Do forgot password', () => {
            it('Verify that the error message appears when resetting the password with invalid format email', () => {
                forgotPassword.doForgotPassword(generateData.generateRandomCharacters(5));
                cy.hasValidationMessage(en.invalidEmail);
            });

            it('Verify that the error message appears when resetting the password with non-existed email', () => {
                forgotPassword.doForgotPassword(generateData.getEmail());
                cy.hasValidationMessage(en.validException);
            });

            it('Verify that the error message appears when resetting the password by leaving the email field blank', () => {
                forgotPassword.doForgotPassword(generateData.generateRandomCharacters(5));
                forgotPassword.clearEmail();
                cy.hasValidationMessage(en.emailEmpty);
            });
        });
        context('Navigate', () => {
            it('Verify that the Login page appears after clicking on Back to login link', () => {
                forgotPassword.goBackHomePageByLink();
            });

            it('Verify that the Login page appears after clicking on Back to login button ', () => {
                forgotPassword.doForgotPassword();
                forgotPassword.goBackHomePageByBTN();
            });
        });
    });
});
