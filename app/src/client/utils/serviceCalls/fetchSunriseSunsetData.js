// @flow
import { sunrise as sunriseAPI } from '../../../config/services';
import { handleError } from './handleError';
import { get } from '../../../server';

const {
  defaults: {
    date: defaultDateParameter
  },
  endpoint: sunriseEndpoint
} = sunriseAPI;

/**
 * @param lat {string}
 * @param lon {string}
 * @param date {string}
 */
export const fetchSunriseSunsetData = async (lat: string, lon: string, date: string = defaultDateParameter) =>
    await get({ url: `${sunriseEndpoint}?lat=${lat}&lng=${lon}&date=${date}` })
        .then(handleAPIResponse)
        .catch(handleError);

type APIResponse = {
    results: {
        sunrise: string,
        sunset: string
    }
};

/**
 * @param sunrise {string}
 * @param sunset {string}
 * @returns {{sunrise: string, sunset: string}}
 */
const handleAPIResponse = ({ results: { sunrise, sunset } = {} } : APIResponse = {}) =>
    ({
        sunrise,
        sunset
    });
