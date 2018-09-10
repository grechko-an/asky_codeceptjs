/// <reference path="./steps.d.ts" />

let url1 = 'http://uapress.info/content/news/2015/3/68755/big2/9417ee2d899001badbb7f825e9131ec61427444206.jpg';
let url2 = 'https://muzei-mira.com/templates/museum/images/paint/step-niva-kuindji+.jpg';
let url3 = 'http://www.nat-geo.ru/upload/iblock/8b9/8b9e2b04dfdc81e67d7e0a2b9be50e91.jpg';
let title = 'Grechkos demo test quizz';

Feature('Smoke tests');

Before((I) => {
    I.amOnPage('/');
});

After((I) => {
    //  I.clearCookie();
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
     libraryPage.getUserAgreement();
     libraryPage.clickCreateButton();
     createPage.clickPollButton();
     createPollPage.openBackgroundEditor();
     createPollPage.loadImageWithUrl(url1);
     createPollPage.fillTitlePage(title, 'Its made for QA staff meeting', '#57db18');
     createPollPage.openQuestionsTab();
     createPollPage.createFirstQuestion('Question 1', 'Answer 1', 'Answer 2', 'Answer 3');
     createPollPage.createSecondQuestion('Question 2', url2, url3);
     createPollPage.saveNewQuizz();
     libraryPage.openLibraryPage();
     I.wait(3);
     I.see(title, '.ng-binding');
     I.saveScreenshot("libraryPageWithNewQuizz.png");
});
