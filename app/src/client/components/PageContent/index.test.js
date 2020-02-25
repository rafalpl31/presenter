import React from 'react';
import { shallow } from 'enzyme';
import { cities } from '../../../config/app';
import { LocationForm } from '../forms/LocationForm';
import { DatePicker } from '../molecules/DatePicker';
import LocationsList from '../molecules/LocationsList';
import { PageContent } from './';

describe('<PageContent/>', () => {

    it('renders required elements', () => {
        const component = shallow(<PageContent/>);

        expect(component.find(DatePicker)).toHaveLength(1);
        expect(component.find(LocationForm)).toHaveLength(1);
        expect(component.find(LocationsList)).toHaveLength(1);
    });

    it('sets default state correctly', () => {
        const component = shallow(<PageContent/>);

        expect(component.state()).toEqual({
            cities
        });
    });

    it('adds city to state on form submit', () => {
        const component = shallow(<PageContent/>);
        const instance = component.instance();
        const mockEvent = {
            preventDefault: jest.fn()
        };

        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(0);
        expect(component.state('cities')).toHaveLength(3);

        instance.onSubmitForm(mockEvent);

        expect(mockEvent.preventDefault).toHaveBeenCalledTimes(1);
        expect(component.state('cities')).toHaveLength(4);
    });

    it('removes city from state correctly', () => {
        const component = shallow(<PageContent/>);
        const instance = component.instance();
        const cityIndexToRemove = 1;

        expect(component.state('cities')).toHaveLength(3);

        instance.removeCityFromState(cityIndexToRemove);

        expect(component.state('cities')).toHaveLength(2);
    });

    it('updates date in state', () => {
        const component = shallow(<PageContent/>);
        const instance = component.instance();

        expect(component.state('date')).toEqual(undefined);

        instance.onChangeDatePicker(new Date(2018, 10, 10));

        expect(component.state('date')).toEqual('2018-11-10');
    });

});
