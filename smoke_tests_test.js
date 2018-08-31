/// <reference path="./steps.d.ts" />

Feature('Smoke tests');

Before((I) => {
    I.amOnPage('/');
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

xScenario('login', (I, loginPage, libraryPage) => {
    loginPage.clickLogInButton();
    loginPage.sendForm('testsiteuser@arkadium.com', '123');
    I.wait(5);
    libraryPage.currentUrlIsAsExpected();
    I.wait(3);
    I.say('Check if user agreement popup is present and accept it if its true');
    if(libraryPage.getUserAgreementIsPresent()) {
        libraryPage.getUserAgreement();
    }
    libraryPage.checkLibraryPageIsOpened();
    I.saveScreenshot("libraryPage.png");
});

Scenario('create poll quiz', (I, loginPage, libraryPage, createPage, createPollPage) => {
    loginPage.clickLogInButton();
    loginPage.sendForm('testsiteuser@arkadium.com', '123');
    I.wait(3);
    I.say('Check if user agreement popup is present and accept it if its true');
    if(libraryPage.getUserAgreementIsPresent()) {
        libraryPage.getUserAgreement();
    }
    libraryPage.clickCreateButton();
    I.wait(3);
    createPage.clickCreateButton();
    I.wait(3);
    

    
After((I) => {
//  I.clearCookie();
   });
});