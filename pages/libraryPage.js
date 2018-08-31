/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    currentTab: 'http://quiz-adminsite-qa.azurewebsites.net/#!/ListQuiz/4',
    askyLogo: { css: 'div.container-fluid.ng-scope > div.navbar-header > span > img' },
    libraryTab: 'LIBRARY',
    createTab: 'CREATE',
    guidlinesTab: 'GUIDELINES',
    userAcc: 'testsiteuser@arkadium.com',
    buttonCreateNew: { css: 'div.clearfix > button' },
    quizListItem: { css: 'div.ng-isolate-scope > div.quiz-list-item.clearfix.ng-scope.first-item' },
    userAgreementPopupTitle: 'USER AGREEMENT',
    userAgreementCheckbox: { css: '#haveReadAgreement' },
    userAgreementAcceptButton: { css: '.btn-main' },


    // introducing methods

    currentUrlIsAsExpected() {
        I.seeCurrentUrlEquals(this.currentTab);
    },

    getUserAgreementIsPresent() {
        I.see(this.userAgreementPopupTitle);
    },

    getUserAgreement() {
        I.checkOption(this.userAgreementCheckbox);
        I.wait(1);
        I.seeCheckboxIsChecked(this.userAgreementCheckbox);
        I.wait(2);
        I.click(this.userAgreementAcceptButton);
    },

    checkLibraryPageIsOpened() {
        I.seeElement(this.askyLogo);
        I.see(this.libraryTab);
        I.see(this.createTab);
        I.see(this.guidlinesTab);
        I.see(this.userAcc);
        I.seeElement(this.buttonCreateNew);
        I.seeElement(this.quizListItem);
    },

    clickCreateButton() {
        I.click(this.buttonCreateNew);
    }

}