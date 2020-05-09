import Page from './base.page';
import assert from 'assert';

const URL = 'https://www.phptravels.net/';

class Login extends Page {
  open() {
    browser.url(URL);
    browser.$('body').waitForExist(30000);
  }
  validateUrl() {
    assert.equal(browser.getUrl(), URL);
  }
}

export default new Login();