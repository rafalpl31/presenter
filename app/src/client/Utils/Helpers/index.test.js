import { getUniqueKey } from './index';

describe('helpers', () => {

    describe('getUniqKey', () => {

        it('returns unique number', () => {
            expect(getUniqueKey()).not.toEqual(getUniqueKey());
            expect(typeof getUniqueKey()).toEqual('number');
        });

    });

});
