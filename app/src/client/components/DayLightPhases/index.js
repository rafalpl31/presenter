import React from 'react';
import { dateFormatter } from '../../Formatters';
import { getUniqueKey } from '../../Helpers';
import { CITIES } from '../../constants';
import { DatePicker } from './DatePicker';
import { FormLocation } from './FormLocation';
import { Location } from './Location';

export class DayLightPhases extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            cities: [],
            date: 'today'
        };
    }

    componentDidMount() {
        this.setState({
            cities: CITIES
        });
    }

    onSubmitForm = (e) => {
        e.preventDefault();

        const { name, lat, lon } = e.target;

        this.setState({
            cities: [
                ...this.state.cities,
                {
                    name: name.value,
                    lat: Number(lat.value),
                    lon: Number(lon.value),
                    key: getUniqueKey()
                }
            ]
        });
    };

    removeCityFromState = (key) => {
        const cities = [...this.state.cities]
            .filter((city) => city.key !== key);

        this.setState({
            cities
        });
    };

    onClickButton = (key) =>
        () => {
            this.removeCityFromState(key);
        };

    onChangeDatePicker = (selectedDate) => {
        const date = dateFormatter(selectedDate);

        this.setState({
            date
        })
    };

    render () {
        const { cities, date } = this.state;

        return (
            <>
                <DatePicker onChange={this.onChangeDatePicker}/>
                <h3>Cities List</h3>
                <FormLocation onSubmit={this.onSubmitForm}/>
                {cities.map(({ name, lat, lon, key }) => {
                    return (
                        <Location
                            date={date}
                            key={key}
                            name={name}
                            lat={lat}
                            lon={lon}
                            onClickButton={this.onClickButton(key)}
                        />
                    );
                })}
            </>
        );
    }
}
