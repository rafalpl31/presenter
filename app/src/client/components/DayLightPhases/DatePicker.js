import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DatePicker = (props) => {
    const { onChange } = props;

    return (
        <>
            <strong>Date picker</strong>
            <ReactDatePicker
                onChange={onChange}
            />
        </>
    );
};
