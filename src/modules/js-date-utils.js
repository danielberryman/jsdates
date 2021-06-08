import {
    monthFullNames,
    monthShortNames
} from './js-date-constants.js';

let randomTimestampsTypeCounts = {
    string: 0,
    number: 0,
    now: 0,
    utc: 0,
};

export function getRandomTimestampStringInput() {
    let types = ['iso','iso-time-z','iso-time-rel','short','long'];
    let type = types[getRandomInt(5)];
    if (type == 'iso') {
        return `"${getRandomIsoDtStr()}"`;
    } else if ('iso-time-z') {
        return `"${getRandomIsoDtTimeStr()}"`;
    } else if ('iso-time-rel') {
        return `"${getRandomIsoDtTimeRelStr()}"`;
    } else if ('short') {
        return `"${getRandomShortDtString()}"`;
    } else {
        return `"${getRandomLongDtString()}"`;
    }
}

export function getRandomTimstampNumberInput() {
    let intArr = []
    for (let i = 0; i < 6; i++) {
        let dig = null;
        if (i == 0) {
            dig = getRandomInt(51,1970); // year
        } else if (i == 1) {
            dig = getRandomInt(12); // month
        } else if (i == 2) {
            dig = getRandomInt(31); // day
        } else if (i == 3) {
            dig = getRandomInt(12); // hour
        } else {
            dig = getRandomInt(60); // min & sec
        }
        intArr.push(dig);
    }
    return intArr;
}

export function getRandomInt(max, offset) {
    if (offset == null) {
        offset = 0;
    }
    return Math.floor(Math.random() * max) + offset;
}


export function transformIntsToDblDigStrs(ints) {
    let newIntStrs = [];
    for (let int of ints) {
        let newIntStr = (int < 10) ? transformIntToDblDigitStr(int) : int;
        newIntStrs.push(newIntStr);
    }
    return newIntStrs;
}

function getRandomIsoDtTimeStr() {
    return `${getRandomIsoDtStr()}${getRandomInt(2)==0?'T':' '}${getRandomTime()}${getRandomInt(2)==0?'Z':''}`;
}

function getRandomIsoDtTimeRelStr() {
    return `${getRandomIsoDtTimeStr()}${getRandomTimeOffset()}`;
}

function getRandomShortDtString() {
    let i = getRandomInt(2);
    if (i == 0) {
        return `${transformIntToDblDigitStr(getRandomInt(13,1))}/${transformIntToDblDigitStr(getRandomInt(31))}/${getRandomInt(51,1970)}`;
    } else {
        return `${getRandomInt(51,1970)}`;
    }
}

function getRandomLongDtString() {
    let i = getRandomInt(4);
    if (i == 0) {
        return `${monthFullNames[getRandomInt(13)]} ${transformIntToDblDigitStr(getRandomInt(31))} ${getRandomInt(51,1970)}`;
    } else if (i == 1) {
        return `${transformIntToDblDigitStr(getRandomInt(31))} ${monthFullNames[getRandomInt(13)]} ${getRandomInt(51,1970)}`;
    } else if (i == 2) {
        return `${monthShortNames[getRandomInt(13)]} ${transformIntToDblDigitStr(getRandomInt(31))} ${getRandomInt(51,1970)}`;
    } else {
        return `${transformIntToDblDigitStr(getRandomInt(31))} ${monthShortNames[getRandomInt(13)]} ${getRandomInt(51,1970)}`;
    }
    // Long: Mon DD YYYY
    // Long2: DD Mon YYYY
    // Long3: Month DD YYYY
    // Long4: DD Month YYYY
}

function getRandomIsoDtStr() {
    let i = getRandomInt(3);
    if (i == 0) {
        return `${getRandomInt(51,1970)}-${transformIntToDblDigitStr(getRandomInt(13,1))}-${transformIntToDblDigitStr(getRandomInt(31))}`;
    } else if (i == 1) {
        return `${getRandomInt(51,1970)}-${transformIntToDblDigitStr(getRandomInt(13,1))}`;
    } else {
        return `${getRandomInt(51,1970)}`;
    }
}

function getRandomTime() {
    let arr = [];
    let ln = getRandomInt(3,2);
    for (let i = 0; i < ln; i++) {
        let int = null;
        if (i == 0) {
            int = getRandomInt(25);
        } else {
            int = getRandomInt(60);
        }
        arr.push((int < 10) ? transformIntToDblDigitStr(int) : int);
    }
    return (ln == 2) ? `${arr[0]}:${arr[1]}` : `${arr[0]}:${arr[1]}:${arr[2]}`;
}

function getRandomTimeOffset() {
    let arr = [];
    for (let i = 0; i < 2; i++) {
        let int = null;
        if (i == 0) {
            int = getRandomInt(25);
        } else {
            int = getRandomInt(60);
        }
        arr.push(transformIntToDblDigitStr(int));
    }
    return `${getRandomInt(2)==0?'+':'-'}${arr[0]}:${arr[1]}`;
}

function transformIntToDblDigitStr(int) {
    let str = int.toLocaleString('en-US', { minimumIntegerDigits: 2 });
    // account for js not allowing octal literals in strict mode
    let arr = str.split('');
    return arr[0] + 'o' + arr[1];
}

export function isLowestTimestampType(type) {
    let lowestType = null;
    for (let cType in randomTimestampsTypeCounts) {
        lowestType = (lowestType == null) ? 
            cType : (cType != type) ? 
                (randomTimestampsTypeCounts[cType] < randomTimestampsTypeCounts[lowestType] ?
                    cType : lowestType) : lowestType;
    }
}

function copyToClipboard() {
    navigator.clipboard.writeText(timestampPrompt.innerHTML).then(function() {
        timestampCopyToast.innerHTML = 'Copied!';
        timestampCopyToast.setAttribute('open', true);
        setTimeout(function() { timestampCopyToast.removeAttribute('open', false); }, 2000);
      }, function() {
        timestampCopyToast.innerHTML = 'Hmmm...copy failed.';
        timestampCopyToast.setAttribute('open', true);
        setTimeout(function() { timestampCopyToast.removeAttribute('open', false); }, 2000);
      });
}

function getSecondSundayInMarch() {
    let year = new Date().getFullYear();
    let date = new Date(year,2,7);
    date.setDate(7 + (7 - date.getDay()));
}

function getFirstSundayInNovember() {
    let year = new Date().getFullYear();
    let date = new Date(year,10,7);
    date.setDate(7 - date.getDay());
}

export function sanitizeDateConstructor(constructorString) {
    // TODO: need to figure how to remove 0o when o is not preceeded by a number 1-9 and remove only o when it is
    let result = constructorString.replace(/o/g,'');
    return result.replace(/"/g,'\'');
}

// window.console = {
//     log: function(str){
//       var node = document.createElement("div");
//       node.appendChild(document.createTextNode(str));
//       document.getElementById("myLog").appendChild(node);
//     }
//   }