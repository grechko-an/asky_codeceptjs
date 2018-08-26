/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    buttonPoll: 'Poll', //or {css: div.new-quiz-box.ng-scope > div > button.option-button.option-poll.option-icon}

    // introducing methods

    clickPollButton() {
        I.click(this.buttonPoll);
    },
}