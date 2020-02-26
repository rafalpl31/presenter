// @flow
import React from 'react';
import { City as CityType } from '../../../types';
import { Header } from '../../atoms';
import { Location } from './Location';

type Props = {
    locations: CityType[],
    date?: string,
    onClickButton: Function
};

/**
 * @param locations {array}
 * @param date {string}
 * @param onClickButton
 */
const LocationsList = ({ locations, date, onClickButton } : Props) =>
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

export default LocationsList;
