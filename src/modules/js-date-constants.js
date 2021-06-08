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
    'year = ____?' + newline
    'month = ____?' + newline
    'date = ____?' + newline
    'hour = ____?';
export const setupJSString = 'let dateObject;let year;let month;let date;let hour;';
export const resultHTMLString = "<p id='result'></p>";

export const utcDateQuestion = 'What year, month, date, and hour will the date above return when local methods are called on it?';
export const localDateQuestion = 'What year, month, date, and hour will the date above return when utc methods are called on it?';

