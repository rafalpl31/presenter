// @flow
import React, { useState } from 'react';
import ReactDatePicker from 'react-datepicker';
import { Header } from '../../atoms';
import 'react-datepicker/dist/react-datepicker.css';

type Props = {
    onChange: Function
};

export const DatePicker = ({ onChange }: Props) => {
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
