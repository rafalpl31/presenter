import { getUniqKey } from './Helpers';

export const CITIES = [
    {
        name: 'Krakow',
        lat: 50.064651,
        lon: 19.944981,
        key: getUniqKey()
    },
    {
        name: 'Tokio',
        lat: 39.758602,
        lon: -104.997437,
        key: getUniqKey()
    },
    {
        name: 'NewYork',
        lat: 55.755825,
        lon: 37.617298,
        key: getUniqKey()
    }
];
