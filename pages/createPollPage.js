/// <reference path="../steps.d.ts" />

const I = actor();

module.exports = {

    // setting locators

    titlePageTab: 'Title Page',
    titleChangeBackground: {css: locate('span').withText('Change Background')},
    hideTitleScreenCheckBox: {css: '#facebookShare'},
    yellowColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[1]'},
    redColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[2]'}, 
    purpleColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[3]'},
    blueColorSelector: {xpath: '//div[@class=theme-color-list clearfix]/div[4]'},
    backgroundEditorEnterImageURLField: {css: locate('input').withAttr({placeholder: 'Enter image URL'})},
    backgroundEditorGoButton: {css: locate('button').withText('Go')},
    titleField: {css: '#introTitle'},
    descriptionField: {css: '#introDesc'},
    uploadImageButton: 'Upload image',
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

    // introducing methods
}

