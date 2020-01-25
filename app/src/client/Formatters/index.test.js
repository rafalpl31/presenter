import { dateFormatter } from './index';

describe('Formatters', () => {

    describe('dateFormatter', () => {

        it('returns result with expected format', () => {

            expect(dateFormatter(new Date(1990, 1, 1))).toEqual('1990-02-01');

        });

        it('does not crash when no argument', () => {

            expect(typeof dateFormatter()).toEqual('string');

        });

    });

});
