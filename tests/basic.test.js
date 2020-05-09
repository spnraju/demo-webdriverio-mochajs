import loginPO from '../pages/login.page';

describe('PHP Travels', () => {
  it('should have the right title', () => {
      loginPO.open();
      loginPO.validateUrl();
  })
})