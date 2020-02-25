import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../atoms';
import './style.css';

/**
 * @param onSubmit
 */
export const LocationForm = ({ onSubmit }) =>
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

LocationForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};
