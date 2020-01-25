import React from 'react';
import { fetchSunriseSunsetData } from '../../Utils/serviceCalls';
import { DayLightAnimation } from './DayLightAnimation';
import './Location.css';

export class Location extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            sunrise: '',
            sunset: ''
        };
    }

    componentDidMount() {
        const { lat, lon, date } = this.props;

        fetchSunriseSunsetData(lat, lon, date)
            .then(({ sunrise, sunset } = {}) => {
                if (sunrise && sunset) {
                    this.setState({
                        sunrise,
                        sunset
                    });
                }
            });
    }

    render() {
        const { name, lat, lon, onClickButton } = this.props;
        const { sunrise, sunset } = this.state;

        if (!sunrise || !sunset) {
            return null;
        }

        return (
            <div className="location">
                <button onClick={onClickButton}>remove</button>
                {name}, {lat}, {lon}; Sunrise: {sunrise}, Sunset: {sunset}
                <DayLightAnimation
                    sunrise={sunrise}
                    sunset={sunset}
                />
            </div>
        );
    }
}
