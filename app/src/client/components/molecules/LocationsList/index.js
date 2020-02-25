import React from 'react';
import PropTypes from 'prop-types';
import { Header } from '../../atoms';
import { Location } from './Location';

/**
 * @param locations {array}
 * @param date {string}
 * @param onClickButton
 */
const LocationsList = ({ locations = [], date, onClickButton }) =>
    <>
        <Header title="Cities List"/>
        {locations.map(({ name, lat, lon }, index) =>
            <Location
                date={date}
                index={index}
                key={index}
                name={name}
                lat={lat}
                lon={lon}
                onClickButton={onClickButton}
            />
        )}
    </>;

LocationsList.propTypes = {
    locations: PropTypes.arrayOf(
        PropTypes.shape({
            lat: PropTypes.number,
            lon: PropTypes.number,
            name: PropTypes.string
        })).isRequired,
    date: PropTypes.string,
    onClickButton: PropTypes.func.isRequired
};

export default LocationsList;
