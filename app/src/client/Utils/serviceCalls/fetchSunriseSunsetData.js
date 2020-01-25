import { API_ENDPOINT } from '../../constants';

const RESPONSE_OK = 'OK';

/**
 * @param lat
 * @param lon
 * @param date
 */
export const fetchSunriseSunsetData = (lat, lon, date) =>
    fetch(`${API_ENDPOINT}?lat=${lat}&lng=${lon}&date=${date}`)
        .then(handleAPIResponse)
        .catch((error) => alert(error));

/**
 * @param Response
 * @returns {Promise<{sunrise: *, sunset: *}>}
 */
const handleAPIResponse = (Response) => {
    if (!Response.ok) {
        throwNewError();
    }

    return Response.json()
        .then(({ results: { sunrise,  sunset } = {}, status } = {}) => {
            if (status !== RESPONSE_OK) {
                throwNewError();
            }

            return {
                sunrise,
                sunset
            };
        });
};

const throwNewError = () => {
    throw new Error('You entered wrong data!');
};
