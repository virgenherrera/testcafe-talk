import { Selector, t } from 'testcafe';
import { Authenticated } from './abstract/authenticated';

export class InventoryPage extends Authenticated {
  async clickAddToCartButton(listItem: number) {
    const selector = `.inventory_item:nth-child(${listItem}) button`;

    return await t.click(Selector(selector));
  }

  getShoppingCartValue() {
    const { innerText = '' } = this.shoppingCartLink.find(
      '.shopping_cart_badge',
    );

    return innerText;
  }
}
