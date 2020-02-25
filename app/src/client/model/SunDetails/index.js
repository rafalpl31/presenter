/**
 * @param sunrise {string}
 * @param sunset {string}
 * @returns {{sunrise: string, sunset: string}}
 */
export const getSunDetails = ({ sunrise = '', sunset = '' } = {}) =>
  ({
    sunrise,
    sunset
  });
