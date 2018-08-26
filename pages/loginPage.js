/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    askyLogo: { css: '.text-center > img' },
    letsGetStartedText: { css: 'span.login-middle-title' },
    getMoreInformationButton: { xpath: '//*[@id="loginContainer"]/div[4]/button[1]' },
    logInButton: { xpath: '//*[@id="loginContainer"]/div[4]/button[2]' },
    logInTab: { xpath: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[3]/span/div/div/div/div/div/div/div/div/div[1]/ul/li[1]/a' },
    signUpTab: { xpath: '//*[@id="auth0-lock-container-1"]/div/div[2]/form/div/div/div[3]/span/div/div/div/div/div/div/div/div/div[1]/ul/li[2]/a' },
    emailField: { css: 'div.auth0-lock-input-block.auth0-lock-input-email > div > input' },
    passField: { css: 'div.auth0-lock-input-block.auth0-lock-input-show-password > div > div > input' },
    finalLogInButton: { css: '#auth0-lock-container-1 > div > div.auth0-lock-center > form > div > div > button' },


    // introducing methods

    askyLogoIsPresent() {
        I.seeElement(this.askyLogo);
    },

    letsGetStartedText() {
        I.seeElement(this.letsGetStartedText);
    },

    clickGetMoreInformationButton() {
        I.click(this.getMoreInformationButton);
    },

    clickLogInButton() {
        I.click(this.logInButton);
    },

    sendForm(email, password) {
        I.fillField(this.emailField, email);
        I.fillField(this.passField, password);
        I.click(this.finalLogInButton);
    },

};