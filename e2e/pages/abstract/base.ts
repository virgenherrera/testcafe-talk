import { ClientFunction, Selector } from 'testcafe';

export abstract class Base {
  errorMessage = Selector('h3[data-test="error"]');

  async getErrorMessage() {
    return await this.errorMessage.innerText;
  }

  getCurrentUrl() {
    const getWindowLocation = ClientFunction(() => window.location.href);

    return getWindowLocation();
  }
}
