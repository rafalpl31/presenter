// @flow
import { convertDateToPercentages } from '../../../utils/formatters';
import { getSingleGradient } from './getSingleGradient';
import { getDoubleGradient } from './getDoubleGradient';

/**
 * @param sunrise {string}
 * @param sunset {string}
 * @returns {{background: string}}
 */
export const getStyles = (sunrise: string, sunset: string) => {
    const left = convertDateToPercentages(sunrise);
    const right = convertDateToPercentages(sunset);

    const gradientValue = left < right
        ? getSingleGradient(left, right)
        : getDoubleGradient(left, right);

    return {
        background: `repeating-linear-gradient(to right, #000, ${gradientValue}`
    };
};
