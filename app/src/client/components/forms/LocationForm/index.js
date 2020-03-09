// @flow
import React, { memo } from 'react';
import { Button } from '../../atoms';
import './style.css';

type Props = {
    onSubmit: Function
};

/**
 * @param onSubmit
 */
const NonMemoLocationForm = ({ onSubmit } : Props) =>
    <form
        className="locationForm"
        onSubmit={onSubmit}
    >
        <label>
            City: <input required={true} type="text" name="name"/>
        </label>
        <label>
            Latitude: <input required={true} type="number" name="lat" step="any"/>
        </label>
        <label>
            Longitude: <input required={true} type="number" name="lon" step="any"/>
        </label>
        <Button
            type="submit"
            label="Add new city"
        />
    </form>;

export const LocationForm = memo(NonMemoLocationForm);
