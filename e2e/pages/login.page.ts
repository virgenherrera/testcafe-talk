import { Selector, t } from 'testcafe';
import { Credentials } from '../models/credentials.model';
import { Base } from './abstract/base';

export class LoginPage extends Base {
  usernameField = Selector('#user-name');
  passwordField = Selector('#password');
  loginButton = Selector('#login-button');
  labelProduct = Selector('.product_label');

  async typeInUsernameField(value: string) {
    return await t.typeText(this.usernameField, value);
  }

  async typeInPasswordField(value: string) {
    return await t.typeText(this.passwordField, value);
  }

  async clickInLoginButton() {
    return await t.click(this.loginButton);
  }

  async authenticateUser(credentials: Credentials) {
    await this.typeInUsernameField(credentials.username);
    await this.typeInPasswordField(credentials.password);
    await this.clickInLoginButton();
  }
}
