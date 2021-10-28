import { Selector, t } from 'testcafe';
import { Base } from './base';

export abstract class Authenticated extends Base {
  hamburgerButton = Selector('#react-burger-menu-btn');
  logoutLink = Selector('#logout_sidebar_link');
  shoppingCartLink = Selector('#shopping_cart_container .shopping_cart_link');

  async clickOnHamburgerButton() {
    return await t.click(this.hamburgerButton);
  }

  async clickOnLogoutLink() {
    return await t.click(this.logoutLink);
  }

  async clickOnCartLink() {
    return await t.click(this.shoppingCartLink);
  }

  async logout() {
    await this.clickOnHamburgerButton();
    await this.clickOnLogoutLink();
  }
}
