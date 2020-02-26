import {
    convertDateToPercentages,
    dateFormatter
} from './index';

describe('formatters', () => {

    describe('dateFormatter', () => {

        it('returns result with expected format', () => {
            expect(dateFormatter(new Date(1990, 1, 1))).toEqual('1990-02-01');
        });

        it('does not crash when no argument', () => {
            expect(typeof dateFormatter()).toEqual('string');
        });

    });

    describe('convertDateToPercentages', () => {

        it('returns default value when no input', () => {
            expect(convertDateToPercentages()).toEqual(0);
        });

        it('returns default value when wrong input', () => {
            expect(convertDateToPercentages('asd')).toEqual(0);
        });

        it('returns expected result for valid data', () => {
            expect(convertDateToPercentages('12:00 PM')).toEqual(100);
            expect(convertDateToPercentages('6:00 PM')).toEqual(75);
            expect(convertDateToPercentages('6:00 AM')).toEqual(75);
        });

    });

});
