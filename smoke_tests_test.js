/// <reference path="./steps.d.ts" />

Feature('Smoke tests');

Before((I) => {
    I.amOnPage('/');
    I.clearCookie();
    I.wait(3);
    I.refreshPage();
    I.wait(3);
});

xScenario('check Login page is opened', (I) => {
    I.seeElement({ css: '.text-center > img' });
    I.seeElement({ css: 'span.login-middle-title' });
    I.seeElement({ xpath: '//*[@id="loginContainer"]/div[4]/button[1]' });
    I.see('Log In');
});

xScenario('click Get More Information button', (I, loginPage) => {
    loginPage.clickGetMoreInformationButton();
    I.switchToNextTab();
    I.seeInCurrentUrl('https://www.arkadium.com/contact/');
});

xScenario('login', { retries: 1 }, (I, loginPage, libraryPage) => {
    loginPage.clickLogInButton();
    loginPage.sendForm('testsiteuser@arkadium.com', '123');
    I.wait(5);
    libraryPage.currentUrlIsAsExpected();
    libraryPage.getUserAgreement();
    I.wait(1);
    libraryPage.checkLibraryPageIsOpened();
    I.saveScreenshot("libraryPage.png");
});

Scenario('create poll quiz', (I, loginPage, libraryPage, createPage, createPollPage) => {
    loginPage.clickLogInButton();
    loginPage.sendForm('testsiteuser@arkadium.com', '123');
    I.wait(3);
    libraryPage.getUserAgreement();
    libraryPage.clickCreateButton();
    I.wait(3);
    createPage.clickCreateButton();
    I.wait(3);

});