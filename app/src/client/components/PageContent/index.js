// @flow
import React from 'react';
import { dateFormatter } from '../../utils/formatters';
import { cities } from '../../../config/app';
import { DatePicker } from '../molecules/DatePicker';
import { LocationForm } from '../forms/LocationForm';
import LocationsList from '../molecules/LocationsList';
import type { City as CityType } from '../../types';
import { City } from '../../model';

type Props = {};
type State = {
    cities: CityType[],
    date?: string
};

export class PageContent extends React.PureComponent<Props, State> {

    constructor (props: Props) {
        super(props);

        this.state = {
            cities
        };
    }

    onSubmitForm = (event: SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newCity = City(event.target);

        this.setState({
            cities: [
                ...this.state.cities,
                newCity
            ]
        });
    };

    removeByIndex = (data: CityType[], index: number): CityType[] =>
        [...data].filter((element, elementIndex) => elementIndex !== index);

    removeCityFromState = (index: number) => {
        const cities = this.removeByIndex(this.state.cities, index);

        this.setState({
            cities
        });
    };

    onChangeDatePicker = (selectedDate: Date) => {
        const date = dateFormatter(selectedDate);

        this.setState({
            date
        });
    };

    render () {
        const { cities, date } = this.state;

        return (
            <>
                <DatePicker onChange={this.onChangeDatePicker}/>
                <LocationForm onSubmit={this.onSubmitForm}/>
                <LocationsList
                  locations={cities}
                  date={date}
                  onClickButton={this.removeCityFromState}
                />
            </>
        );
    }
}
