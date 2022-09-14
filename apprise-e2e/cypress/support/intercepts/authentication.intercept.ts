import { BaseIntercept } from './base.intercept';
class AuthenticationIntercept extends BaseIntercept {
    postLogin() {
        return this.post('/auth/login').as('apiPostLogin');
    }
}
export const authenticationIntercept = new AuthenticationIntercept();
