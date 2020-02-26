// @flow

export const getDoubleGradient = (left: number, right: number) =>
    `yellow 0%, yellow ${right}%, #000 ${right}%, #000 ${left}%, yellow ${left}%, yellow 100%)`;
