import { getDateScriptProperties } from './modules/js-dates.js';

let generateBtn;
let submitBtn;
let jsEditor;
let jsEditorResult;
let jsEditorResultHTML;
let jsEditorResultJS;
let scriptProperties;

window.onload = function() {
    init();
}

function init() {
    setElementVars();
    setElementProps();
}

function setElementVars() {
    generateBtn = document.getElementById('generate-btn');
    submitBtn = document.getElementById('submit-btn');
    jsEditor = document.getElementById('js-editor');
    jsEditorResult = document.getElementById('js-editor-result').contentWindow.document;
}
    
function setElementProps() {
    generateBtn.onclick = generateScriptProperties;
    submitBtn.onclick = processSubmit;
}

function generateScriptProperties() {
    clearEditor();

    // Steps
    // 1. Determine which script you need to generate (for now this will simply be a date script)
    // skip for now
    scriptProperties = getDateScriptProperties();
    
    // save current editor results html and js
    jsEditorResultHTML = scriptProperties.setupHTML;
    // currently for dates I'm only doing 1 thing so this doesn't matter
    if (!jsEditorResultJS) {
        jsEditorResultJS = scriptProperties.setupJS;
    }

    // update iframe document
    updateJsEditorResultsDocument(jsEditorResultHTML, jsEditorResultJS);

    // add js script to the editor
    jsEditor.value = scriptProperties.jsScript;
}

function processSubmit() {
    // add the results html to iframe
    let html = scriptProperties.resultHTML;
    let js = (jsEditor.value + scriptProperties.resultJS);

    // add the html and js to the iframe document
    updateJsEditorResultsDocument(html, js);
}

function updateJsEditorResultsDocument(html, js) {
    jsEditorResult.open();
    jsEditorResult.writeln(html+'<script>'+js+'</script>');
    jsEditorResult.close();
}

function clearEditor() {
    jsEditor.value = '';
}

function clearResults() {
    jsEditorResult = document.implementation.createHTMLDocument();
}








// VARIABLES
// const monthFullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const monthNums = ['00','01','02','03','04','05','06','07','08','09','10','11','12'];
// const dayNames = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
// const today = new Date();
// const tMonName = monthNums[today.getMonth()];
// const tDate = today.getDate();
// const tDayName = dayNames[today.getDay()];
// const tYear = today.getFullYear();
// const tStr = tMonName + ' ' + tDate + ', ' + tYear;
// const flashcards = [
//     {
//         prompt: 'Return the current date as a Date object',
//         answers: [
//             'new Date()'
//         ]
//     },
//     {
//         prompt: 'Return the current date as a String',
//         answers: [
//             'Date()'
//         ]
//     },
//     {
//         prompt: `Return the number of milliseconds in UTC elapsed since 1 January, 1970, 00:00:00 UTC (Today's date is: ${tStr})`,
//         answers: [
//             `Date.UTC(${tYear},${tMonName},${tDate})`
//         ]
//     },
//     {
//         prompt: `Return the number of milliseconds in your timezone elapsed since 1 January, 1970, 00:00:00 UTC (Today's date is: ${tStr})`,
//         answers: [
//             `new Date(${tYear},${tMonName},${tDate}).getTime()`,
//             'Date.now()'
//         ]
//     },
//     {
//         prompt: `Return the difference between the number of milliseconds elapsed since 1 January, 1970, 00:00:00 UTC 
//                 between your timezone and UTC (Today's date is: ${tStr})`,
//         answers: [
//             `new Date(${tYear},${tMonName},${tDate}).getTime() - Date.UTC(${tYear},${tMonName},${tDate})`
//         ]
//     },
//     {
//         prompt: 'Convert the number of milliseconds in UTC elapsed since 1 January, 1970, 00:00:00 UTC to a Date object',
//         answers: [
//             'new Date(Date.now())',

//         ]
//     },
//     {
//         prompt: 'Convert the number of milliseconds in UTC elapsed since 1 January, 1970, 00:00:00 UTC to a String',
//         answers: [
//             'Date(Date.now())'
//         ]
//     }
// ];
// const years = [
//     1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,
//     1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,
//     1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,
//     2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,
//     2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,
//     2020,2021
// ];
// const dates = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
// const hrs = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
// let localtime = new Date();
// let localtimeStr = `Local: ${tDayName}, ${tDate} ${tYear} ${localtime.toTimeString()}`;
// let utctime = new Date(Date.now());
// let utctimeStr = 'UTC: ' + utctime.toUTCString();
// let randomTimestampsTypeCounts = {
//     string: 0,
//     number: 0,
//     now: 0,
//     utc: 0,
// };
// let card = flashcards[0];
// let cardIndex = flashcards.indexOf(card);
// let answerEl;
// let congratsEl;
// let imgEl;
// let incorrectEl;
// let launchBtnEl;
// let timestampBtnEl;
// let practiceBtnEl;
// let navBtns;

// let localtimeEl;
// let utctimeEl;

// // NAV SECTIONS
// let launchSection;
// let timestampSection;
// let practiceSection;
// let navSections;

// // NAV BTN/SECTION INDEXES
// let launchIndex;
// let timestampIndex;
// let practiceIndex;

// TIMESTAMP
// let editorHTML;
// let editorJS;
// let generateDateScript;
// let jsEditor;
// let submitDateScript;
// let code;

// let timestampGen;
// let timestampPrompt;
// let timestampSubmit;
// let timestampQuestion;
// let timestampQuestionInfo;
// let timestampAnswer = {
//     year: null,
//     month: null,
//     date: null,
//     hr: null,
//     fullStr: null
// };
// let timestampInputYr;
// let timestampInputMon;
// let timestampInputDt;
// let timestampInputHr;
// let timestampCopyToast;

// window.onload = function() {
//     init();
// }

// function init() {
//     setElementVars();
//     setElementProps();
//     launchQuiz();
// }

// // SETUP
// function setElementVars() {
//     answerEl = document.getElementById('answer');
//     congratsEl = document.getElementById('congrats');
//     imgEl = document.querySelector('img');
//     incorrectEl = document.getElementById('incorrect');

//     // NAV BTNS
//     launchBtnEl = document.getElementById('launch');
//     timestampBtnEl = document.getElementById('timestamp');
//     practiceBtnEl = document.getElementById('practice');
//     navBtns = [ launchBtnEl, timestampBtnEl, practiceBtnEl ];

//     localtimeEl = document.getElementById('localtime');
//     utctimeEl = document.getElementById('utctime');

//     // NAV SECTIONS
//     launchSection = document.getElementById("launch-section");
//     timestampSection = document.getElementById("timestamp-section");
//     practiceSection = document.getElementById("practice-section");
//     navSections = [ launchSection, timestampSection, practiceSection ];
    
//     // NAV BTN/SECTION INDEXES
//     launchIndex = 0;
//     timestampIndex = 1;
//     practiceIndex = 2;

//     // TIMESTAMP
    // generateDateScript = document.getElementById('gen-date-script');
    // jsEditor = document.getElementById('js-editor');
    // submitDateScript = document.getElementById('submit-date-script');
    // code = document.getElementById('code').contentWindow.document;
//     timestampGen = document.getElementById('timestamp-gen');
//     timestampPrompt = document.getElementById('timestamp-prompt');
//     timestampSubmit = document.getElementById('timestamp-submit');
//     timestampQuestion = document.getElementById('timestamp-question');
//     timestampInputYr = document.getElementById('timestamp-input-yr');
//     timestampInputMon = document.getElementById('timestamp-input-mon');
//     timestampInputDt = document.getElementById('timestamp-input-dt');
//     timestampInputHr = document.getElementById('timestamp-input-hr');
//     timestampCopyToast = document.getElementById('timestamp-copy-toast');
// }

// function setElementProps() {
//     launchBtnEl.onclick = launchQuiz;
//     timestampBtnEl.onclick = launchTimestamp;
//     practiceBtnEl.onclick = launchPractice;
//     addOptionsToSelect(timestampInputYr, years);
//     addOptionsToSelect(timestampInputMon, monthNums);
//     addOptionsToSelect(timestampInputDt, dates);
//     addOptionsToSelect(timestampInputHr, hrs);
    // generateDateScript.onclick = pasteDateScriptToJSEditor;
    // submitDateScript.onclick = processJSEditorSubmission;
//     timestampGen.onclick = nextTimestampQuestion;
//     timestampPrompt.onclick = copyToClipboard;
//     timestampSubmit.onclick = submitTimestampAnswer;
// }

// function generateDate() {

// }

// function pasteDateScriptToJSEditor() {
//     let date = generateDate();
//     jsEditor.value = date;
// }

// function processJSEditorSubmission() {
    // code.open();
    // code.writeln(
        // HIDDEN: Declare variables
        // HIDDEN: Contruct response HTML
        // SHOW: Comments about how to use the script
        // SHOW: The generated script
        // ONSUBMIT: 


//         "<p id='para'></p>" +
//         "<script>" +
//         jsEditor.value +
//         "let p = document.getElementById('para').innerHTML = yearLocal;" +
//         "</script>"
//     );
//     code.close();
// }

// // QUIZ
// function launchQuiz() {
//     setSectionBtn(launchIndex);
//     setSection(launchIndex);
//     document.getElementById('submit').innerHTML = 'Submit';
//     document.getElementById('submit').onclick = doQuizSubmit;
//     setLaunchPrompt();
// }

// function toggleQuiz() {
//     if (quizFormEl.style.display === 'none') {
//         quizFormEl.style.display = 'block';
//         startBtnEl.innerHTML = 'Restart';
//         congratsEl.style.display = 'none';
//     } else {
//         quizFormEl.style.display = 'none';
//         startBtnEl.innerHTML = 'Start';
//         resetQuiz();
//     }
// }

// function resetQuiz() {
//     setCard(0);
//     setLaunchPrompt();
//     answerEl.value = ''; // clear input
//     imgEl.src = 'tardis.png';
//     resetIncorrect();
// }

// function doQuizSubmit(event) {
//     event.preventDefault()
//     let answer = sanitizeAnswer();
//     if (isCorrect(answer)) {
//         resetIncorrect();
//         cardIndex++;
//         if (cardIndex == 5) {
//             congratulate();
//         } else {
//             setNextQuestion();
//         }
//     } else {
//         incorrectEl.style.display = 'block';
//         // display a message
//         // clear the input
//     }
// }

// function sanitizeAnswer() {
//     let a = answerEl.value.trim();
//     if (a.slice(-1) == ';') {
//         a = a.slice(0, -1);
//     }
//     return a;
// }

// function isCorrect(answer) {
//     for (let i = 0; i < card.answers.length; i++) {
//         if (card.answers[i] === answer) {
//             return true;
//         }
//     }
//     return false;
// }

// function setNextQuestion() {
//     imgEl.src = 'tardis' + cardIndex + '.png'
//     card = flashcards[cardIndex];
//     setLaunchPrompt();
//     answerEl.value = ''; // clear input;
// }

// function setCard(index) {
//     card = flashcards[index];
//     cardIndex = flashcards.indexOf(card);
// }

// function setLaunchPrompt() {
//     document.getElementById('launch-prompt').innerHTML = card.prompt;
// }

// function congratulate() {
//     imgEl.src = 'tardis5.png';
//     congratsEl.style.display = 'block';
//     toggleQuiz();
// }

// function resetIncorrect() {
//     incorrectEl.style.display = 'none';
// }

// // TIMESTAMPS @ RANDOM
// let timestamp = {
//     input: null,
//     output: null,
// }

// function launchTimestamp() {
//     setSectionBtn(timestampIndex);
//     setSection(timestampIndex);
// }

// function nextTimestampQuestion() {
//     setTimestampQuestion();

//     let strToDisplay = timestamp.input;
//     if (timestamp.input != 'Date.now()') {
//         strToDisplay = timestamp.input.replace(/o/g,'');
//     }
//     timestampPrompt.innerHTML = `let date = ${strToDisplay}`;
//     let q = getRandomTimestampQuestion();
//     timestampQuestion.innerHTML = q.question;
//     setTimestampAnswer(q);
// }

// function submitTimestampAnswer() {
//     if (timestampInputYr.options[timestampInputYr.selectedIndex].innerText == timestampAnswer.year &&
//         timestampInputMon.options[timestampInputMon.selectedIndex].innerText == timestampAnswer.month &&
//         timestampInputDt.options[timestampInputDt.selectedIndex].innerText == timestampAnswer.date &&
//         timestampInputHr.options[timestampInputHr.selectedIndex].innerText == timestampAnswer.hr) {
//         alert('You got it!');
//     } else {
//         alert('Wrong!');
//     }
//     console.log('your answer : correct answer');
//     console.log(timestampInputYr.options[timestampInputYr.selectedIndex].innerText + ' : ' + timestampAnswer.year);
//     console.log(timestampInputMon.options[timestampInputMon.selectedIndex].innerText + ' : ' + timestampAnswer.month);
//     console.log(timestampInputDt.options[timestampInputDt.selectedIndex].innerText + ' : ' + timestampAnswer.date);
//     console.log(timestampInputHr.options[timestampInputHr.selectedIndex].innerText + ' : ' + timestampAnswer.hr);
//     return false;
// }

// function setTimestampQuestion() {
//     let types = [
//         'utc','string','number','string','utc',
//         'number','string','number','now','string','utc'
//     ];
//     let t = types[getRandomInt(11)];
//     let input = null;
//     let inputStr = null;
//     if (t == 'string' || isLowestTimestampType(t)) {
//         inputStr = getRandomTimestampStringInput();
//         input = 'new Date(' + inputStr + ')';
//     } else if (t == 'now') {
//         input = 'Date.now()';
//     } else {
//         let ints = getRandomTimstampNumberInput();
//         let intStrs = transformIntsToDblDigStrs(ints);
//         inputStr = intStrs[0] + ', ' + intStrs[1] + ', ' + intStrs[2] + ', ' + intStrs[3] + ', ' + intStrs[4] + ', ' + intStrs[5];
//         if (t == 'number') {
//             input = 'new Date(' + inputStr + ')';
//         } else {
//             input = 'Date.UTC(' + inputStr + ')';
//         }
//     }
//     setCTQInput(input);
// }

// function setTimestampAnswer(question) {
//     if (question.method == 'console.log') {
//         timestampAnswer = {
//             year: eval(timestamp.input + '.getFullYear()'),
//             month: eval(timestamp.input + '.getMonth()'),
//             date: eval(timestamp.input + '.getDate()'),
//             hr: eval(timestamp.input + '.getHours()'),
//             fullStr: eval(`console.log(${timestamp.input})`)
//         };
//     } else {
//         timestampAnswer = {
//             year: eval(timestamp.input + '.getUTCFullYear()'),
//             month: eval(timestamp.input + '.getUTCMonth()'),
//             date: eval(timestamp.input + '.getUTCDate()'),
//             hr: eval(timestamp.input + '.getUTCHours()'),
//             fullStr: eval(`${timestamp.input}.toUTCString()`)
//         }; 
//     }
// }

// function getRandomTimstampNumberInput() {
//     let intArr = []
//     for (let i = 0; i < 6; i++) {
//         let dig = null;
//         if (i == 0) {
//             dig = getRandomInt(51,1970); // year
//         } else if (i == 1) {
//             dig = getRandomInt(12); // month
//         } else if (i == 2) {
//             dig = getRandomInt(31); // day
//         } else if (i == 3) {
//             dig = getRandomInt(12); // hour
//         } else {
//             dig = getRandomInt(60); // min & sec
//         }
//         intArr.push(dig);
//     }
//     return intArr;
// }

// function getRandomTimestampStringInput() {
//     let types = ['iso','iso-time-z','iso-time-rel','short','long'];
//     let type = types[getRandomInt(5)];
//     if (type == 'iso') {
//         return `"${getRandomIsoDtStr()}"`;
//     } else if ('iso-time-z') {
//         return `"${getRandomIsoDtTimeStr()}"`;
//     } else if ('iso-time-rel') {
//         return `"${getRandomIsoDtTimeRelStr()}"`;
//     } else if ('short') {
//         return `"${getRandomShortDtString()}"`;
//     } else {
//         return `"${getRandomLongDtString()}"`;
//     }
// }

// function getRandomTimestampQuestion() {
//     let questions = [ 
//         "What year, month, date, and hour will the method .toUTCString() return using the Date object created above?",
//         "What year, month, date, and hour will show when the Date object created above is printed using console.log()?"
//     ];
//     let question = questions[getRandomInt(2)];
//     return timestampQuestionInfo = {
//         question: question,
//         method: (questions.indexOf(question) == 0 ? '.toUTCString' : 'console.log')
//     };
// }

// function setCTQInput(input) {
//     timestamp.input = input;
// }

// // PRACTICE
// function launchPractice() {
//     setSectionBtn(practiceIndex);
//     setSection(practiceIndex);
//     localtimeEl.innerHTML = localtimeStr;
//     utctimeEl.innerHTML = utctimeStr;
// }

// // UTILS
// function setSectionBtn(navBtnIndex) {
//     for (let i = 0; i < navBtns.length; i++) {
//         if (navBtns[i].classList.contains('selected')) {
//             navBtns[i].classList.remove('selected');
//         }
//     }
//     navBtns[navBtnIndex].classList.add('selected');
// }

// function setSection(navSectionIndex) {
//     for (let i = 0; i < navSections.length; i++) {
//         if (navSections[i].style.display != 'none') {
//             navSections[i].style.display = 'none';
//         }
//     }
//     navSections[navSectionIndex].style.display = 'block';
// }

// function getRandomInt(max, offset) {
//     if (offset == null) {
//         offset = 0;
//     }
//     return Math.floor(Math.random() * max) + offset;
// }

// function addOptionsToSelect(selectEl, options) {
//     for (let opt of options) {
//         let option = document.createElement("option");
//         option.value = opt;
//         option.innerHTML = opt;
//         selectEl.add(option);
//     }
// }

// function transformIntsToDblDigStrs(ints) {
//     let newIntStrs = [];
//     for (let int of ints) {
//         let newIntStr = (int < 10) ? transformIntToDblDigitStr(int) : int;
//         newIntStrs.push(newIntStr);
//     }
//     return newIntStrs;
// }

// function getRandomIsoDtTimeStr() {
//     return `${getRandomIsoDtStr()}${getRandomInt(2)==0?'T':' '}${getRandomTime()}${getRandomInt(2)==0?'Z':''}`;
// }

// function getRandomIsoDtTimeRelStr() {
//     return `${getRandomIsoDtTimeStr()}${getRandomTimeOffset()}`;
// }

// function getRandomShortDtString() {
//     let i = getRandomInt(2);
//     if (i == 0) {
//         return `${transformIntToDblDigitStr(getRandomInt(13,1))}/${transformIntToDblDigitStr(getRandomInt(31))}/${getRandomInt(51,1970)}`;
//     } else {
//         return `${getRandomInt(51,1970)}`;
//     }
// }

// function getRandomLongDtString() {
//     let i = getRandomInt(4);
//     if (i == 0) {
//         return `${monthFullNames[getRandomInt(13)]} ${transformIntToDblDigitStr(getRandomInt(31))} ${getRandomInt(51,1970)}`;
//     } else if (i == 1) {
//         return `${transformIntToDblDigitStr(getRandomInt(31))} ${monthFullNames[getRandomInt(13)]} ${getRandomInt(51,1970)}`;
//     } else if (i == 2) {
//         return `${monthShortNames[getRandomInt(13)]} ${transformIntToDblDigitStr(getRandomInt(31))} ${getRandomInt(51,1970)}`;
//     } else {
//         return `${transformIntToDblDigitStr(getRandomInt(31))} ${monthShortNames[getRandomInt(13)]} ${getRandomInt(51,1970)}`;
//     }
//     // Long: Mon DD YYYY
//     // Long2: DD Mon YYYY
//     // Long3: Month DD YYYY
//     // Long4: DD Month YYYY
// }

// function getRandomIsoDtStr() {
//     let i = getRandomInt(3);
//     if (i == 0) {
//         return `${getRandomInt(51,1970)}-${transformIntToDblDigitStr(getRandomInt(13,1))}-${transformIntToDblDigitStr(getRandomInt(31))}`;
//     } else if (i == 1) {
//         return `${getRandomInt(51,1970)}-${transformIntToDblDigitStr(getRandomInt(13,1))}`;
//     } else {
//         return `${getRandomInt(51,1970)}`;
//     }
// }

// function getRandomTime() {
//     let arr = [];
//     let ln = getRandomInt(3,2);
//     for (let i = 0; i < ln; i++) {
//         let int = null;
//         if (i == 0) {
//             int = getRandomInt(25);
//         } else {
//             int = getRandomInt(60);
//         }
//         arr.push((int < 10) ? transformIntToDblDigitStr(int) : int);
//     }
//     return (ln == 2) ? `${arr[0]}:${arr[1]}` : `${arr[0]}:${arr[1]}:${arr[2]}`;
// }

// function getRandomTimeOffset() {
//     let arr = [];
//     for (let i = 0; i < 2; i++) {
//         let int = null;
//         if (i == 0) {
//             int = getRandomInt(25);
//         } else {
//             int = getRandomInt(60);
//         }
//         arr.push(transformIntToDblDigitStr(int));
//     }
//     return `${getRandomInt(2)==0?'+':'-'}${arr[0]}:${arr[1]}`;
// }

// function transformIntToDblDigitStr(int) {
//     let str = int.toLocaleString('en-US', { minimumIntegerDigits: 2 });
//     // account for js not allowing octal literals in strict mode
//     let arr = str.split('');
//     return arr[0] + 'o' + arr[1];
// }

// function isLowestTimestampType(type) {
//     let lowestType = null;
//     for (let cType in randomTimestampsTypeCounts) {
//         lowestType = (lowestType == null) ? 
//             cType : (cType != type) ? 
//                 (randomTimestampsTypeCounts[cType] < randomTimestampsTypeCounts[lowestType] ?
//                     cType : lowestType) : lowestType;
//     }
// }

// function copyToClipboard() {
//     navigator.clipboard.writeText(timestampPrompt.innerHTML).then(function() {
//         timestampCopyToast.innerHTML = 'Copied!';
//         timestampCopyToast.setAttribute('open', true);
//         setTimeout(function() { timestampCopyToast.removeAttribute('open', false); }, 2000);
//       }, function() {
//         timestampCopyToast.innerHTML = 'Hmmm...copy failed.';
//         timestampCopyToast.setAttribute('open', true);
//         setTimeout(function() { timestampCopyToast.removeAttribute('open', false); }, 2000);
//       });
// }

// function getSecondSundayInMarch() {
//     let year = new Date().getFullYear();
//     let date = new Date(year,2,7);
//     date.setDate(7 + (7 - date.getDay()));
// }

// function getFirstSundayInNovember() {
//     let year = new Date().getFullYear();
//     let date = new Date(year,10,7);
//     date.setDate(7 - date.getDay());
// }

// export {
//     transformIntToDblDigitStr,
//     getRandomTimeOffset,
//     getRandomTime,
//     getRandomIsoDtStr,
//     getRandomShortDtString,
//     getRandomLongDtString
// };

// window.console = {
//     log: function(str){
//       var node = document.createElement("div");
//       node.appendChild(document.createTextNode(str));
//       document.getElementById("myLog").appendChild(node);
//     }
//   }
