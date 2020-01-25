import { getUniqueKey } from './Utils/Helpers';

const CITIES = [
    {
        name: 'Krakow',
        lat: 50.064651,
        lon: 19.944981,
        key: getUniqueKey()
    },
    {
        name: 'Tokio',
        lat: 39.758602,
        lon: -104.997437,
        key: getUniqueKey()
    },
    {
        name: 'New York',
        lat: 55.755825,
        lon: 37.617298,
        key: getUniqueKey()
    }
];

const API_ENDPOINT = 'https://api.sunrise-sunset.org/json';

export {
    API_ENDPOINT,
    CITIES
};
