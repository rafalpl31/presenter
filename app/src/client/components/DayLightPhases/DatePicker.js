import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = (props) => {
    const [ startDate, setStartDate ] = useState(new Date());
    const { onChange } = props;

    return (
        <>
            <strong className="datePickerHeader">Date picker</strong>
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
