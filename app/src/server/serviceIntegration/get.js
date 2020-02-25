import axios from 'axios';

const ACCEPTABLE_STATUS = [
    200,
    204
];

export const get = async ({ url }) =>
    await axios
        .get(url)
        .then(({ data, status }) => {
            if (ACCEPTABLE_STATUS.includes(status)) {
                return data;
            }

            throwNewError();
        });

const throwNewError = () => {
    throw new Error('You have used API incorrectly!');
};
