// @flow
import React, { memo } from 'react';
import { getStyles } from './getAnimationStyles';
import './style.css';

type Props = {
    sunrise: string,
    sunset: string
};

/**
 * @param sunrise {string}
 * @param sunset {string}
 */
export const DayLightAnimation = memo(({ sunrise, sunset } : Props) =>
    <div
        className="dayLightAnimation"
        style={getStyles(sunrise, sunset)}
    />
);
