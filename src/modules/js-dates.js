import { 
    getRandomInt, 
    isLowestTimestampType, 
    getRandomTimestampStringInput,
    transformIntsToDblDigStrs,
    getRandomTimstampNumberInput,
    sanitizeDateConstructor
} from './js-date-utils.js';

import {
    newline,
    dblNewline,
    space,
    variableStatement,
    dateAssignment,
    dateVariables,
    setupJSString,
    resultHTMLString,
    utcDateQuestion,
    localDateQuestion
} from './js-date-constants.js';

// I want this module to do the following
// 1. Generate a random date constructor
// 2. Generate variables and expression for either local or UTC functions that can be evaluated by js
// 3. Evaluate the submitted javascript, analyze it, and return a response based on correctness.

// VARIABLES
let dateScriptProperties = {
    setupHTML: '',
    setupJS: '',
    jsScript: '',
    resultHTML: '',
    resultJS: '' 
}
let setupHTMLString;
let jsScriptString;
let resultJSString;
let dateProperties = {
    constructor: '',
    questionText: '',
    yearFn: '',
    monthFn: '',
    dateFn: '',
    hourFn: '',
    successMsg: '',
    errorMsg: '',
    correctResults: ''
}
let dateType; // utc, string, number, now
let questionType; // utc or local

// Functions
export function getDateScriptProperties() {
    getDateProperties();

    // STEPS:
    // a) setup html (nothing for now)
    // b) setup js (Is this ever going to change? Not for now. Exists as constant setupJSString)
    // c) js script
    jsScriptString = constructScriptString();
    // d) result html (exists as constant currently)
    // e) result js
    resultJSString = constructResultString();

    if (setupHTMLString) { dateScriptProperties.setupHTML = setupHTMLString };
    if (setupJSString) { dateScriptProperties.setupJS = setupJSString };
    if (jsScriptString) { dateScriptProperties.jsScript = jsScriptString };
    if (resultHTMLString) { dateScriptProperties.resultHTML = resultHTMLString };
    if (resultJSString) { dateScriptProperties.resultJS = resultJSString };

    return dateScriptProperties;
}

function getDateProperties() {
    // STEPS:
    // What are the main things to keep track of?
    //      Type of param/constructor: utc, string, number, now
    //      Type of testing: utc or local
    generateDate();
    console.log(dateProperties.constructor);
    generateQuestion();
    console.log(dateProperties.questionText);
    getFns();
    getSuccessMessage();
        // successMsg
    getErrorMessage();
        // errorMsg
        //      Future upgrade: reasons why this might have failed; this would be a grerat beginner PR for newbies
    getCorrectResults();
    console.log(dateProperties.correctResults);
        // correctResults
}

function constructScriptString() {
    return  dateAssignment + dateProperties.constructor + dblNewline + space +
            dateProperties.questionText + newline +
            variableStatement + dblNewline +
            dateVariables;
}

function constructResultString() {
    return  'let resultYear = dateObject.' + dateProperties.yearFn + '() == ' + year + ';' +
            'let resultMonth = dateObject.' + dateProperties.monthFn + '() == ' + month + ';' +
            'let resultDate = dateObject.' + dateProperties.dateFn + '() == ' + date + ';' +
            'let resultHour = dateObject.' + dateProperties.hourFn + '() == ' + hour + ';' +
            'let el = document.getElementById(\'result\');' +
            'if (resultYear && resultMonth && resultDate && resultHour) {' +
                'el.innerHTML = ' + dateProperties.successMsg + dblNewline + dateProperties.correctResults + ';' +
            '} else {' +
                'el.innerHTML = ' + dateProperties.errorMsg + dblNewline + dateProperties.correctResults + ';' +
            '}';
}

function generateDate() {
    // TODO: Refactor these types for better probability impl
    let types = [
        'utc','string','number','string','utc',
        'number','string','number','now','string','utc'
    ];
    let t = types[getRandomInt(11)];
    let date = null;
    let dateStr = null;
    if (t == 'string' || isLowestTimestampType(t)) {
        dateStr = getRandomTimestampStringInput();
        date = 'new Date(new Date(' + dateStr + '))';
        dateType = 'string';
    } else if (t == 'now') {
        date = 'Date.now()';
        dateType = 'now';
    } else {
        let ints = getRandomTimstampNumberInput();
        let intStrs = transformIntsToDblDigStrs(ints);
        dateStr = intStrs[0] + ', ' + intStrs[1] + ', ' + intStrs[2] + ', ' + intStrs[3] + ', ' + intStrs[4] + ', ' + intStrs[5];
        if (t == 'number') {
            date = 'new Date(' + dateStr + ')';
            dateType = 'number';
        } else {
            date = 'new Date(Date.UTC(' + dateStr + '))';
            dateType = 'utc';
        }
    }
    dateProperties.constructor = date; 
    // Note: lowercase o(s) are added after leading zero
    // Modules run in strict mode by default and this doesn't allow octal literals
}

function generateQuestion() {
    let i = getRandomInt(2);
    if (i == 0) {
        questionType = 'utc';
        dateProperties.questionText = utcDateQuestion;
    } else {
        questionType = 'local';
        dateProperties.questionText = localDateQuestion;
    }
}

function getFns() {
    if (questionType == 'local') {
        dateProperties.yearFn = 'getFullYear';
        dateProperties.monthFn = 'getMonth';
        dateProperties.dateFn = 'getDate';
        dateProperties.hourFn = 'getHours';
    } else {
        dateProperties.yearFn = 'getUTCFullYear';
        dateProperties.monthFn = 'getUTCMonth';
        dateProperties.dateFn = 'getUTCDate';
        dateProperties.hourFn = 'getUTCHours';
    }
}   

function getSuccessMessage() {
    dateProperties.successMsg = 'Well done!'
}

function getErrorMessage() {
    // TODO: future upgrade - reasons why this might have failed; this would be a grerat beginner PR for newbies
    dateProperties.errorMsg = 'Not quite...but keep trying! You\'ll get it!';
}
    
function getCorrectResults() {
    let date = dateProperties.constructor;
    if (dateType != 'number') {
        date = sanitizeDateConstructor(dateProperties.constructor);
    }
    dateProperties.correctResults = 
        'Year: ' + eval(date + '.' + dateProperties.yearFn + '()') + ',\n' +
        'Month: ' + eval(date + '.' + dateProperties.monthFn + '()') + ',\n' +
        'Date: ' + eval(date + '.' + dateProperties.dateFn + '()') + ',\n' +
        'Hour: ' + eval(date + '.' + dateProperties.hourFn + '()');
}
