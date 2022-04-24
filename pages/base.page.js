export default class Base {
  constructor(selector) {
    this.selector = selector;
  }

  async waitForPageToLoad() {
    return await $(this.selector).waitForDisplayed({ timeout: 10000 });
  }

  async open(urlPath) {
    await browser.maximizeWindow();
    await browser.url(urlPath);
  }
}
