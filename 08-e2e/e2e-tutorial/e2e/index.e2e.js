const {expect} = require('chai');
const webdriver = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');

chrome.setDefaultService(new chrome.ServiceBuilder(chromedriver.path).build());


describe('testing the homepage', function() {
    let chromeDriver;

    beforeEach(async function() {
        chromeDriver = new webdriver.Builder().forBrowser('chrome').build();
        await chromeDriver.get('http://localhost:3001');
    });

    it('true to equal true', function(done) {
        const firstName=  chromeDriver.findElement(webdriver.By.css('input[name="firstName"]'));
         firstName.sendKeys('Yariv');

        const lastName=  chromeDriver.findElement(webdriver.By.css('input[name="lastName"]'));
         lastName.sendKeys('Katz');

        const button =  chromeDriver.findElement(webdriver.By.css('button[type="submit"]'));
         button.click();

        setTimeout(async () => {
            const alertSuccess = await chromeDriver.findElement(webdriver.By.css('.alert.alert-success'));
            const text = await alertSuccess.getText()
            expect(text).to.equal('Yariv');
            done();
        }, 1000);
        
    });    

});