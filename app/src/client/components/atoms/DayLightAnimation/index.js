import React from 'react';
import PropTypes from 'prop-types';
import { getStyles } from './getAnimationStyles';
import './style.css';

/**
 * @param sunrise {string}
 * @param sunset {string}
 */
export const DayLightAnimation = ({ sunrise, sunset }) =>
  <div
    className="dayLightAnimation"
    style={getStyles(sunrise, sunset)}
  />;

DayLightAnimation.propTypes = {
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired
};
