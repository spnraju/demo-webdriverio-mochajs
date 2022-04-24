import Base from './Base.page';

const userNameInput = '#user-name';
const passWordInput = '#password';
const loginButton = '#login-button';
const errorMessage = '.error-message-container.error';

class Login extends Base {
  constructor() {
    super(loginButton);
  }

  async open() {
    await super.open('/');
  }

  async setUserName(userName) {
    await $(userNameInput).waitForEnabled();
    await $(userNameInput).setValue(userName);
  }

  async setPassword(password) {
    await $(passWordInput).waitForEnabled();
    await $(passWordInput).setValue(password);
  }

  async loginSubmit() {
    await $(loginButton).waitForClickable();
    await $(loginButton).click();
  }

  async isErrorMessageVisible() {
    await $(errorMessage).waitForDisplayed();
    return await $(errorMessage).isDisplayed();
  }
}

export default new Login();
