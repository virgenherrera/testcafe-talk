import { Role } from 'testcafe';
import { validUser } from '../fixtures/users.fixture';
import { LoginPage } from '../pages/login.page';

const loginPage = new LoginPage();

export const standardUser = Role(
  'https://www.saucedemo.com/',
  async () => await loginPage.authenticateUser(validUser),
);
