// @flow
import { SunDetails } from '../../types';

/**
 * @param sunrise {string}
 * @param sunset {string}
 * @returns {{sunrise: string, sunset: string}}
 */
export const getSunDetails = ({ sunrise = '', sunset = '' } : SunDetails = {}) =>
  ({
    sunrise,
    sunset
  });
