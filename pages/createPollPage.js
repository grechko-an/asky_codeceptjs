/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    titlePageTab: 'Title Page',
    titleChangeBackground: locate('span').withText('Change Background'),
    hideTitleScreenCheckBox: {css: '#facebookShare'},
    colorForm: {css: '#inputQuizColor'},
    backgroundEditorEnterImageURLField: locate('input').withAttr({placeholder: 'Enter image URL'}),
    backgroundEditorGoButton: locate('button').withText('Go'),
    backgroundEditorSaveAndCloseButton: 'Save & Close',
    titleField: {css: '#introTitle'},
    descriptionField: {css: '#introDesc'},
    backgroundEditorPopup: {css: '.modal-content'},
    uploadImageButton: {xpath: '//input[@name="qqfile"]'},
    questionsTab: 'Questions',
    addAnswerButton: '+ Add Answer',
    addQuestionButton: '+ Add Question',
    questionField: {css: '#pollQuestion'},
    randomizeCheckBox: {css: '#answersRandomOrderForQuestionCheckbox'},
    textAnswersRadioButton: 'Text Answers',
    pictureAnswersRadioButton: 'Picture Answers',
    textPlusPictureAnswersRadioButton: 'Text + Picture Answers',
    answerField: {css: '#answerText'},
    addImageButton: 'Add image',
    firstQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div[1]/div'},
    firstAnswerOfFirstQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div/div[2]/div/button[1]'},
    secondAnswerOfFirstQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div/div[2]/div/button[2]'},
    thirdAnswerOfFirstQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div/div[2]/div/button[3]'}, 
    secondQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div[2]/div[1]'},
    firstAnswerOfSecondQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/button[1]'},
    secondAnswerOfSecondQuestion: {xpath: '/html/body/div[2]/div[2]/div[3]/div[1]/div/div/div[1]/div/div/div[2]/div[2]/div/button[2]'},
    publishTab: 'Publish',
    saveButton: 'Save',
     // yellowColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[1]'},
     // redColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[2]'}, 
     // purpleColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[3]'},
     // blueColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[4]'},

    // introducing methods

    openTitlePageTab() {
        I.click(this.titlePageTab);
    },

    openBackgroundEditor() {
        I.wait(5);
        I.click(this.titleChangeBackground);
    },

    loadImageWithUrl(url) {
        I.wait(1);
        I.fillField(this.backgroundEditorEnterImageURLField, url);
        I.wait(1);
        I.click(this.backgroundEditorGoButton);
        I.wait(5);
        I.click(this.backgroundEditorSaveAndCloseButton);
        I.wait(1);
    },

    fillTitlePage(title, desc, color) {
        I.wait(1);
        I.fillField(this.titleField, title);
        I.wait(1);
        I.fillField(this.descriptionField, desc);
        I.wait(12);
        I.fillField(this.colorForm, color);
    },

    openQuestionsTab() {
        I.wait(2);
        I.click(this.questionsTab);
    },

    createFirstQuestion(question, answer1, answer2, answer3) {
        I.fillField(this.questionField, question);
        I.seeCheckboxIsChecked(this.randomizeCheckBox);
        I.wait(1);
        I.click(this.textAnswersRadioButton);
        I.wait(1);
        I.click(this.firstAnswerOfFirstQuestion);
        I.wait(1);
        I.click(this.answerField);
        I.wait(1);
        I.fillField(this.answerField, answer1);
        I.wait(1);
        I.click(this.secondAnswerOfFirstQuestion);
        I.wait(1);
        I.click(this.answerField);
        I.wait(1);
        I.fillField(this.answerField, answer2);
        I.wait(1);
        I.click(this.addAnswerButton);
        I.wait(1);
        I.click(this.thirdAnswerOfFirstQuestion);
        I.wait(1);
        I.click(this.answerField);
        I.wait(1);
        I.fillField(this.answerField, answer3);
    },

    createSecondQuestion(question, url) {
        I.wait(1);
        I.click(this.addQuestionButton);
        I.wait(1);
        I.click(this.secondQuestion);
        I.wait(1);
        I.fillField(this.questionField, question);
        I.wait(1);
        I.click(this.randomizeCheckBox);
        I.wait(1);
        I.dontSeeCheckboxIsChecked(this.randomizeCheckBox);
        I.wait(1);
        I.click(this.pictureAnswersRadioButton);
        I.wait(1);
        I.click(this.firstAnswerOfSecondQuestion);
        I.wait(1);
        I.click(this.addImageButton);
    //I.wait(1);
    //I.click(this.uploadImageButton);
    // this.loadImageWithUrl(url1);
        I.wait(1);
        I.fillField(this.uploadImageButton, 'D:\\autotesting\\asky_codeceptjs\\asky_codeceptjs\\images\\1.jpg');      // относительный путь может быть '.\\images\\1.jpg'
        I.wait(1);
        I.click(this.backgroundEditorSaveAndCloseButton);
        I.wait(1);
        I.click(this.secondAnswerOfSecondQuestion);
        I.wait(1);
        I.click(this.addImageButton);
        I.wait(1);
        this.loadImageWithUrl(url);
    },

    saveNewQuizz() {
        I.wait(3);
        I.click(this.saveButton);
    },

}

