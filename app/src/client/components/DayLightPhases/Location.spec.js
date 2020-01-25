import React from 'react';
import { shallow } from 'enzyme';
import { fetchSunriseSunsetData } from '../../Utils/serviceCalls';
import { DayLightAnimation } from './DayLightAnimation';
import { Location } from './Location';

jest.mock('../../Utils/serviceCalls');

describe('<Location/>', () => {

    beforeAll(() => {
        fetchSunriseSunsetData.mockImplementation(() => Promise.resolve());
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('does not render elements when no data', () => {
        const defaultValue = '';
        const component = shallow(<Location/>);

        expect(component.find('.location')).toHaveLength(0);
        expect(component.find(DayLightAnimation)).toHaveLength(0);
        expect(component.state()).toEqual({
            sunrise: defaultValue,
            sunset: defaultValue
        });
    });

    it('renders elements when day details were provided', async () => {
        const fakeState = {
            sunrise: '6:23:00 AM',
            sunset: '3:22:01 PM'
        };
        const component = shallow(<Location/>);
        await component.setState({ ...fakeState });

        expect(component.find('.location')).toHaveLength(1);
        expect(component.find(DayLightAnimation)).toHaveLength(1);
        expect(component.state()).toEqual({...fakeState});
    });

    it('calls fetchSunriseSunsetData on componentDidMount with expected arguments', async () => {
        const fakeLat = '50.064651';
        const fakeLon = '19.944981';
        await shallow(<Location lat={fakeLat} lon={fakeLon}/>);

        expect(fetchSunriseSunsetData).toHaveBeenCalledTimes(1);
        expect(fetchSunriseSunsetData).toHaveBeenCalledWith(fakeLat, fakeLon, undefined);
    });

});
