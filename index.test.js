const app = require('./src/index.js');

test('will return string with the date format: Month DD YYYY', () => {
    for (let i = 0; i < 50; i++) {
        // ARRANGE, ACT
        let t = app.getRandomLongDtString();
        const r = new RegExp([
            '([a-zA-Z]{2,9}\\s[0-3][0-9]\\s[0-2][09][012789][0-9])?',
            '([a-zA-Z]{2,3}\\s[0-3][0-9]\\s[0-2][09][012789][0-9])?',
            '([0-3][0-9]\\s[a-zA-Z]{2,3}\\s[0-2][09][012789][0-9])?',
            '([0-3][0-9]\\s[a-zA-Z]{2,9}\\s[0-2][09][012789][0-9])?'
        ].join(''));
        // ASSERT
        expect(t).toEqual(expect.stringMatching(r));
    }
});

test('will return a string in the following formats YYYY, MM/DD/YYYY', () => {
    for (let i = 0; i < 50; i++) {
        // ARRANGE, ACT
        let t = app.getRandomShortDtString();
        // ASSERT
        expect(t).toEqual(expect.stringMatching(/([01][0-9]\/)?([0-3][0-9]\/)?[0-2][09][012789][0-9]/));
        console.log(t);
    }
});

test('will return the following string formats YYYY, YYYY-MM, YYYY-MM-DD', () => {
    for (let i = 0; i < 50; i++) {
        // ARRANGE, ACT
        let t = app.getRandomIsoDtStr();
        // ASSERT
        expect(t).toEqual(expect.stringMatching(/[0-2][09][012789][0-9](-[01][0-9])?(-[0-3][0-9])?/));
        console.log(t);
    }
});

test('will return a time in format 00:00 or 00:00:00', () => {
    for (let i = 0; i < 50; i++) {
        // ARRANGE, ACT
        let t = app.getRandomTime();
        // ASSERT
        expect(t).toEqual(expect.stringMatching(/[0-2][0-9]:[0-6][0-9](:[0-6][0-9])?/));
    }
});

test('will return a time offset of the pattern +-0:00', () => {
    for (let i = 0; i < 50; i++) {
        // ARRANGE, ACT
        let t = app.getRandomTimeOffset();
        // ASSERT
        expect(t).toEqual(expect.stringMatching(/[+-][0-2][0-9]:[0-6][0-9]/));
    }
});

test('single digit input will return 2 character string', () => {
    let int = 3;
    expect(app.transformIntToDblDigitStr(int)).toBe('03');
});

test('single digit input will NOT return single digit number/string', () => {
    let int = 3;
    expect(app.transformIntToDblDigitStr(int)).not.toBe(3 || '3');
});
