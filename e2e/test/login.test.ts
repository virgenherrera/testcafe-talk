import { invalidUser, validUser } from '../fixtures/users.fixture';
import { LoginPage } from '../pages/login.page';

let loginPage: LoginPage = null;

fixture('e2e:Login suite')
  .page('https://www.saucedemo.com/')
  .beforeEach(async t => {
    loginPage = new LoginPage();

    return t;
  });

test('Should not Login with an Invalid User', async t => {
  await loginPage.authenticateUser(invalidUser);

  await t.expect(await loginPage.getErrorMessage()).contains('Epic sadface');
});

test('Should Login with a valid user', async t => {
  await loginPage.authenticateUser(validUser);

  await t
    .expect(await loginPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/inventory.html');
});
