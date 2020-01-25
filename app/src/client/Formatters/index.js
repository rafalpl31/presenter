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
