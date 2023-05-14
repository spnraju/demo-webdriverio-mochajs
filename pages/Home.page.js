import Base from './Base.page';

const peekLogo = '.app_logo';

class Home extends Base {
  constructor() {
    super(peekLogo);
  }

  async open() {
    await super.open('/inventory');
  }

  async isLogoVisible() {
    await $(peekLogo).waitForDisplayed();
    return await $(peekLogo).isDisplayed();
  }
}

export default new Home();
