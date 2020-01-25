import React from 'react';
import { shallow } from 'enzyme';
import { CITIES } from '../../constants';
import { FormLocation } from './FormLocation';
import { DatePicker } from './DatePicker';
import { Location } from './Location';
import { DayLightPhases } from './index';

describe('<DayLightPhases/>', () => {

    it('renders required elements', () => {
        const component = shallow(<DayLightPhases/>);

        expect(component.find(DatePicker)).toHaveLength(1);
        expect(component.find('h3')).toHaveLength(1);
        expect(component.find(FormLocation)).toHaveLength(1);
        expect(component.find(Location)).toHaveLength(3);
    });

    it('sets default state correctly', () => {
        const component = shallow(<DayLightPhases/>);

        expect(component.state()).toEqual({
            cities: CITIES,
            date: 'today'
        });
    });

});
