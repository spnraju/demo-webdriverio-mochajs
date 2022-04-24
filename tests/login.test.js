import { HomePage, LoginPage } from '../pages';

describe('Login', () => {
  beforeEach(async () => {
    await LoginPage.open();
  });

  it('should login with valid credentials', async () => {
    await LoginPage.setUserName('standard_user');
    await LoginPage.setPassword('secret_sauce');
    await LoginPage.loginSubmit();
    await HomePage.isLogoVisible();
  });

  it('should error with invalid username', async () => {
    await LoginPage.setUserName('standard_use');
    await LoginPage.setPassword('secret_sauce');
    await LoginPage.loginSubmit();
    await LoginPage.isErrorMessageVisible();
  });

  it('should error with invalid username', async () => {
    await LoginPage.setUserName('standard_user');
    await LoginPage.setPassword('secret_sauc');
    await LoginPage.loginSubmit();
    await LoginPage.isErrorMessageVisible();
  });
});
