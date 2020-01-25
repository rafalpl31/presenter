import React from 'react';
import './Location.css';

export class Location extends React.Component {

    constructor(props) {
        super(props);

        this.API_ENDPOINT = 'https://api.sunrise-sunset.org/json';
        this.state = {
            sunrise: '',
            sunset: ''
        };
    }

    componentDidMount() {
        this.fetchDayLightPhases();
    }

    fetchDayLightPhases = () => {
        const { lat, lon, date } = this.props;

        fetch(`${this.API_ENDPOINT}?lat=${lat}&lng=${lon}&date=${date}`)
            .then(this.handleAPIResponse)
            .catch((error) => alert(error));
    };

    throwNewError = () => {
        throw new Error('Something went wrong');
    };

    handleAPIResponse = (response) => {
        if (!response.ok) {
            this.throwNewError();
        }

        return response.json()
            .then(({ results, status } = {}) => {
                if (status !== 'OK') {
                    this.throwNewError();
                }

                const {
                    sunrise,
                    sunset
                } = results;

                this.setState({
                    sunrise,
                    sunset
                });
            });
    };

    getPercentage = (hours, minutes, period) => {
        const clearPeriod = period.substr(period.length - 2);
        const hoursShift = clearPeriod === 'AM' ? 0 : 12;
        const hoursShiftMidnight = clearPeriod === 'AM' && hours === '12' ? 12 : 0;

        return (parseInt(hours) - hoursShiftMidnight + hoursShift + parseInt(minutes)/60)/24 * 100;
    };

    getStyles = () => {
        const { sunrise, sunset } = this.state;

        const left = this.getPercentage(...sunrise.split(':'));
        const right = this.getPercentage(...sunset.split(':'));
        const background = left < right
            ? `repeating-linear-gradient(to right, #000, #000 ${left}%, yellow ${left}%, yellow ${right}%, #000 ${right}%, #000 100%)`
            : `repeating-linear-gradient(to right, #000, yellow 0%, yellow ${right}%, #000 ${right}%, #000 ${left}%, yellow ${left}%, yellow 100%)`;

        return {
            background
        };
    };

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
                <div className="locationBar" style={this.getStyles()}/>
            </div>
        );
    }
}
