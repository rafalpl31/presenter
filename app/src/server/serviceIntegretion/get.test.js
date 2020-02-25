import axios from 'axios';
import { get } from './get';

jest.mock('axios');

describe('get', () => {

    const fakeUrl = 'http://google.com';
    const data = { results: [] };
    const response = {
        data
    };

    it('returns data when acceptable response status 200', async () => {
        axios.get.mockResolvedValue({
            ...response,
            status: 200
        });

        const output = await get({ url: fakeUrl });

        expect(output).toEqual(data);
    });

    it('returns data when acceptable response status 204', async () => {
        axios.get.mockResolvedValue({
            ...response,
            status: 204
        });

        const output = await get({ url: fakeUrl });

        expect(output).toEqual(data);
    });

    it('throws error when response status does not equal 200 or 2004', async () => {
        axios.get.mockResolvedValue({
            ...response,
            status: 404
        });

        try {
            await get({ url: fakeUrl });
        } catch (error) {
            expect(error.message).toEqual('You have used API incorrectly!');
        }
    });

});
