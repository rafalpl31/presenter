import React from 'react';
import { shallow } from 'enzyme';
import ReactDatePicker from 'react-datepicker';
import { Header } from '../../atoms';
import { DatePicker } from './';

describe('<DatePicker/>', () => {

    const requiredProps = {
        onChange: () => {}
    };

    it('renders all expected elements', () => {
        const component = shallow(<DatePicker {...requiredProps}/>);

        expect(component.find(ReactDatePicker)).toHaveLength(1);
        expect(component.find(Header).prop('title')).toEqual('Date picker');
    });

});
