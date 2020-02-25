import React from 'react';
import { shallow } from 'enzyme';
import { cities } from '../../../../config/app';
import { Header } from '../../atoms';
import { Location } from './Location';
import LocationsList from './';

describe('<LocationsList/>', () => {

    const requiredProps = {
        locations: cities,
        onClickButton: () => {},
    };

    it('renders expected elements', () => {
        const component = shallow(<LocationsList {...requiredProps}/>);

        expect(component.find(Header)).toHaveLength(1);
        expect(component.find(Location)).toHaveLength(3);
    });

});
