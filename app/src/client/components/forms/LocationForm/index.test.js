import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '../../atoms';
import { LocationForm } from './index';

describe('<LocationForm/>', () => {

    const requiredProps = {
        onSubmit: () => {}
    };

    it('renders required fields', () => {
        const component = shallow(<LocationForm {...requiredProps}/>);

        expect(component.find('form')).toHaveLength(1);
        expect(component.find('input[name="name"]')).toHaveLength(1);
        expect(component.find('input[name="lat"]')).toHaveLength(1);
        expect(component.find('input[name="lon"]')).toHaveLength(1);
        expect(component.find(Button)).toHaveLength(1);
    });

});
