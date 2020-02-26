// @flow
import { City } from '../../types';

/**
 * @param latitudeValue {string}
 * @param longitudeValue {string}
 * @param nameValue {string}
 * @returns {{name: string, lon: number, lat: number}}
 */
export const getCity = ({
    lat: { value: latitudeValue = '' } = {},
    lon: { value: longitudeValue = '' } = {},
    name: { value: nameValue } = {}
} : City = {}) =>
    ({
        lat: Number(latitudeValue),
        lon: Number(longitudeValue),
        name: nameValue
    });
