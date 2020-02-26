import React from 'react';
import { dateFormatter } from '../../utils/formatters';
import { cities } from '../../../config/app';
import { DatePicker } from '../molecules/DatePicker';
import { LocationForm } from '../forms/LocationForm';
import LocationsList from '../molecules/LocationsList';
import { City } from '../../model';

export class PageContent extends React.PureComponent {

    constructor (props) {
        super(props);

        this.state = {
            cities
        };
    }

    onSubmitForm = (event) => {
        event.preventDefault();

        const newCity = City(event.target);

        this.setState({
            cities: [
                ...this.state.cities,
                newCity
            ]
        });
    };

    removeByIndex = (data, index) =>
        [...data].filter((element, elementIndex) => elementIndex !== index);

    removeCityFromState = (index) => {
        const cities = this.removeByIndex(this.state.cities, index);

        this.setState({
            cities
        });
    };

    onChangeDatePicker = (selectedDate) => {
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
