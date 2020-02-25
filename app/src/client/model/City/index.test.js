import { getCity } from './';

describe('City', () => {

    it('returns expected default object', () => {
        expect(getCity()).toEqual({
            lat: 0,
            lon: 0,
            name: undefined
        });
    });

});
