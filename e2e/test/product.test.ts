import { validUser } from '../fixtures/users.fixture';
import { InventoryPage } from '../pages/inventory.page';
import { LoginPage } from '../pages/login.page';

let inventoryPage: InventoryPage = null;
let loginPage: LoginPage = null;

fixture('e2e:product-page Suite')
  .page('https://www.saucedemo.com/')
  .beforeEach(async t => {
    inventoryPage = new InventoryPage();
    loginPage = new LoginPage();

    return t;
  });

test('Should logout from product page', async t => {
  await loginPage.authenticateUser(validUser);

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/inventory.html');

  await inventoryPage.clickOnHamburgerButton();
  await inventoryPage.clickOnLogoutLink();

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/');
});

test('Should navigate to the shopping cart', async t => {
  await loginPage.authenticateUser(validUser);

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/inventory.html');

  await inventoryPage.clickOnCartLink();

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/cart.html');
});

test('Should add a single item to the shopping cart', async t => {
  await loginPage.authenticateUser(validUser);

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/inventory.html');

  await inventoryPage.clickAddToCartButton(1);

  await t.expect(await inventoryPage.getShoppingCartValue()).eql('1');
});

test('Should add a multiple items to the shopping cart', async t => {
  await loginPage.authenticateUser(validUser);

  await t
    .expect(await inventoryPage.getCurrentUrl())
    .eql('https://www.saucedemo.com/inventory.html');

  await inventoryPage.clickAddToCartButton(1);
  await inventoryPage.clickAddToCartButton(3);
  await inventoryPage.clickAddToCartButton(5);

  await t.expect(await inventoryPage.getShoppingCartValue()).eql('3');
});
