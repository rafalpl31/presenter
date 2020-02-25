import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDatePicker from 'react-datepicker';
import { Header } from '../../atoms';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = ({ onChange } = {}) => {
    const [ startDate, setStartDate ] = useState(new Date());

    return (
        <>
            <Header
              className="datePickerHeader"
              title="Date picker"
            />
            <ReactDatePicker
                onChange={(date) => {
                    setStartDate(date);
                    onChange(date);
                }}
                selected={startDate}
            />
        </>
    );
};

DatePicker.propTypes = {
    onChange: PropTypes.func.isRequired
};
