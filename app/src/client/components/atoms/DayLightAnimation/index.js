// @flow
import React from 'react';
import { getStyles } from './getAnimationStyles';
import './style.css';

type DayLightAnimationType = {
    sunrise: string,
    sunset: string
};

/**
 * @param sunrise {string}
 * @param sunset {string}
 */
export const DayLightAnimation = ({ sunrise, sunset } : DayLightAnimationType) =>
  <div
    className="dayLightAnimation"
    style={getStyles(sunrise, sunset)}
  />;
