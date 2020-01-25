import React from 'react';
import { shallow } from 'enzyme';
import { DayLightAnimation } from './DayLightAnimation';

describe('<DayLightAnimation/>', () => {

    it('renders required elements', () => {
        const component = shallow(<DayLightAnimation/>);
        const locationBar = component.find('.locationBar');

        expect(locationBar).toHaveLength(1);
        expect(locationBar.prop('style')).toHaveProperty('background');
    });

});
