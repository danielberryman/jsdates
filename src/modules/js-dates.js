// I want this module to do the following
// 1. Generate a random date constructor
// 2. Generate variables and expression for either local or UTC functions that can be evaluated by js
// 3. Evaluate the submitted javascript, analyze it, and return a response based on correctness.
let dateProperties = {
    setupHTML: '',
    setupJS: '',
    jsScript: '',
    resultHTML: '',
    resultJS: '' 
}

let setupHTMLString;
let setupJSString;
let jsScriptString;
let resultHTMLString;
let resultJSString;

export function generateDate() {
    // Generate everything you need and set it to dateProperties
    // a) setup html
    
    // b) setup js
    // currently the only thing I'm testing myself on in terms of dates is going to be local versus utc for 
    // year, month, date, hour of a date timestamp
    // Setup 4 variables for these in the js
    // Setup date variable in the js
    setupJSString = 'let dateObject;let year;let month;let date;let hour;';

    // c) js script
    jsScriptString = 'dateObject = new Date(1970);\n\n// What would dateObject.getFullYear return? Set your answer to the following variable:\n\nyear = ?;';
    // str += '\nlet monthLocal = dateObject.getMonth() == ____;';
    // str += '\nlet dateLocal = dateObject.getDate() == ____;';
    // str += '\nlet hourLocal = dateObject.getHour() == ____;';

    // d) result html
    // for this I need for now 1 element to display a message of true or false based on the output
    resultHTMLString = `
        <p id='result'></p>
    `;

    // e) result js
    // here I need to do the logic on response
    resultJSString = `
        let result = dateObject.getFullYear() == year;
        let el = document.getElementById('result');
        el.innerHTML = "Does dateObject.getFullYear() equal " + year + "? " + (result ? "Yep!" : "Hmm...you'll have to think a little more.");
    `;

    if (setupHTMLString) { dateProperties.setupHTML = setupHTMLString };
    if (setupJSString) { dateProperties.setupJS = setupJSString };
    if (jsScriptString) { dateProperties.jsScript = jsScriptString };
    if (resultHTMLString) { dateProperties.resultHTML = resultHTMLString };
    if (resultJSString) { dateProperties.resultJS = resultJSString };

    return dateProperties;
}
