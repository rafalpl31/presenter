import React from 'react';
import { shallow } from 'enzyme';
import { FormLocation } from './FormLocation';

describe('<DayLightAnimation/>', () => {

    it('renders required fields', () => {
        const component = shallow(<FormLocation/>);

        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input[name="name"]')).toHaveLength(1);
        expect(component.find('input[name="lat"]')).toHaveLength(1);
        expect(component.find('input[name="lon"]')).toHaveLength(1);
        expect(component.find('input[type="submit"]')).toHaveLength(1);
    });

});
