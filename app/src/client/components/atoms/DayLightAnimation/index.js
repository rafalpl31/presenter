// @flow
import React from 'react';
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
export const DayLightAnimation = ({ sunrise, sunset } : Props) =>
  <div
    className="dayLightAnimation"
    style={getStyles(sunrise, sunset)}
  />;
