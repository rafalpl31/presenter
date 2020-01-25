/**
 * Returns date in format 'yyyy-mm-dd'
 * @param DateObject
 */
export const dateFormatter = (DateObject = new Date()) => {
    const month = '' + (DateObject.getMonth() + 1);
    const day = '' + DateObject.getDate();
    const year = DateObject.getFullYear();

    return [
        year,
        month.length < 2
            ? '0' + month
            : month,
        day.length < 2
            ? '0' + day
            : day
    ].join('-');
};

/**
 * @param date
 * @returns {number}
 */
export const convertDateToPercentages = (date = '') => {
    const WRONG_INPUT = 0;
    const [hours, minutes, period = ''] = date.split(':');
    const clearPeriod = period.substr(period.length - 2);
    const isAM = clearPeriod === 'AM';
    const hoursShift = isAM ? 0 : 12;
    const hoursShiftMidnight = isAM && hours === '12' ? 12 : 0;
    const result = (parseInt(hours) - hoursShiftMidnight + hoursShift + parseInt(minutes)/60)/24 * 100;

    return Number.isNaN(result)
        ? WRONG_INPUT
        : result;
};
