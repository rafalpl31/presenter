import React from 'react';
import { shallow } from 'enzyme';
import { DayLightAnimation } from './';

describe('<DayLightAnimation/>', () => {

    it('renders required elements with single gradient', () => {
        const defaultProps = {
            sunrise: '',
            sunset: ''
        };
        const component = shallow(<DayLightAnimation {...defaultProps}/>);
        const locationBar = component.find('.dayLightAnimation');

        expect(locationBar).toHaveLength(1);
        expect(locationBar.prop('style')).toEqual({
            background: [
                'repeating-linear-gradient(to right, #000, yellow 0%, ',
                'yellow 0%, #000 0%, #000 0%, yellow 0%, yellow 100%)'
            ].join('')
        });
    });

    it('renders required elements with double gradient', () => {
        const properties = {
            sunrise: '1:00:00 PM',
            sunset: '14:00:00 AM'
        };
        const component = shallow(<DayLightAnimation {...properties}/>);
        const locationBar = component.find('.dayLightAnimation');

        expect(locationBar.prop('style')).toEqual({
            background: [
                'repeating-linear-gradient(to right, #000, #000 54.166666666666664%, yellow 54.166666666666664%, ',
                'yellow 58.333333333333336%, #000 58.333333333333336%, #000 100%)'
            ].join('')
        });
    });

});
