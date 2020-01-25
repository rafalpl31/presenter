import { getUniqueKey } from './Helpers';

export const CITIES = [
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
        name: 'NewYork',
        lat: 55.755825,
        lon: 37.617298,
        key: getUniqueKey()
    }
];
