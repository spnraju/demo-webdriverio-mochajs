import loginPO from '../pages/login.page';

describe('PHP Travels', () => {
  it('should have the right title', () => {
      loginPO.open();
      loginPO.validateUrl();
  })

  it('test new window', () => {
    browser.url('http://google.com')
    browser.newWindow("https://www.google.com", 'Google');
    browser.pause(5000);
    browser.newWindow("https://www.amazon.com", 'Amazon');
    browser.pause(5000);
    browser.newWindow("https://www.paypal.com", 'Paypal');
    browser.pause(5000);
})

})