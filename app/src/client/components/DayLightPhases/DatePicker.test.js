import React from 'react';
import { shallow } from 'enzyme';
import ReactDatePicker from 'react-datepicker';
import { DatePicker } from './DatePicker';

describe('<DatePicker/>', () => {

    it('renders all expected elements', () => {
        const component = shallow(<DatePicker/>);

        expect(component.find(ReactDatePicker)).toHaveLength(1);
        expect(component.find('.datePickerHeader').text()).toEqual('Date picker');
    });

});
