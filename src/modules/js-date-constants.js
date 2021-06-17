export const monthFullNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export const monthShortNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const monthNums = ['00','01','02','03','04','05','06','07','08','09','10','11','12'];
export const dayNames = ['Sun','Mon','Tues','Wed','Thurs','Fri','Sat'];
export const today = new Date();
export const tMonName = monthNums[today.getMonth()];
export const tDate = today.getDate();
export const tDayName = dayNames[today.getDay()];
export const tYear = today.getFullYear();
export const tStr = tMonName + ' ' + tDate + ', ' + tYear;

export const newline = '\n';
export const dblNewline = '\n\n';
export const space = ' ';
export const variableStatement = 'Set your answer to the following variable(s):';
export const dateAssignment = 'dateObject = ';
export const dateVariables = 
    'year = ____;' + newline +
    'month = ____;' + newline +
    'date = ____;' + newline +
    'hour = ____;';
export const setupJSString = 'let dateObject;let year;let month;let date;let hour;';
export const resultHTMLString = 
    `<p id='result'></p>\n` +
    `   <p id='year' style='margin:0;'></p>\n` +
    `   <p id='month' style='margin:0;'></p>\n` +
    `   <p id='date' style='margin:0;'></p>\n` +
    `   <p id='hour' style='margin:0;'></p>\n`;
export const htmlBase = (html) => {
    return  `<html>\n` +
            `<head>\n` +
            `</head>\n` +
            `<body>\n` +
            `   ${html || ''}` +
            `</body>\n` +
            `</html>`;
}

// `${js && `  <script src="${jsURL}" defer></script>`}` +

export const localDateQuestion = 'What year, month, date, and hour will the date above return when *LOCAL* methods are called on it?';
export const utcDateQuestion = 'What year, month, date, and hour will the date above return when *UTC* methods are called on it?';

export const baseHTML = ``;

export const baseJS = 
    `let dateObject = {dateObjectConstructed};` + dblNewline +
    `let cYear = dateObject.{year function}();` + newline +
    `let cMon = dateObject.{year function}();` + newline +
    `let cDate = dateObject.{year function}();` + newline +
    `let cHour = dateObject.{year function}();` + dblNewline +
    `{question text}` + dblNewline +
    `let year = ;` + newline +
    `let mon = ;` + newline +
    `let date = ;` + newline +
    `let hour = ;` + dblNewline +
    `document.getElementById('year').innerHTML = 'Correct Year: ' + cYear + ' / Your Answer: ' + year` + newline +
    `document.getElementById('month').innerHTML = 'Correct Year: ' + cMon + ' / Your Answer: ' + mon` + newline +
    `document.getElementById('date').innerHTML = 'Correct Year: ' + cDate + ' / Your Answer: ' + date` + newline +
    `document.getElementById('hour').innerHTML = 'Correct Year: ' + cHour + ' / Your Answer: ' + hour` + dblNewline +
    `let result = document.getElementById('result').innerHTML;` + newline +
    `result.value = (cYear == year && cMon == mon && cDate == date && cHour == hour) ? 'Correct' : 'Incorrect'`;