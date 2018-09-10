/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    buttonPoll: locate('button').withAttr({href: '#!/CreatePoll/'}),  //{ xpath: '/html/body/div[2]/div[2]/div[2]/div/button[4]' }, 

    // introducing methods

    clickPollButton() {
         I.wait(5);
         I.retry({retries: 3, minTimeout: 1000}).click(this.buttonPoll);
    },
}
