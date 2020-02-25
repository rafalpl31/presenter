import React from 'react';
import PropTypes from 'prop-types';
import { fetchSunriseSunsetData } from '../../../../Utils/serviceCalls';
import {
    Button,
    DayLightAnimation
} from '../../../atoms';
import { SunDetails } from '../../../../model';
import './style.css';

export class Location extends React.PureComponent {

    static propTypes = {
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired,
        date: PropTypes.string,
        onClickButton: PropTypes.func.isRequired,
        index: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);

        this.state = SunDetails();
    }

    componentDidMount() {
        const { lat, lon, date } = this.props;

        fetchSunriseSunsetData(lat, lon, date)
            .then(this.updateLocation);
    }

    isValidSunData = ({ sunrise, sunset } = {}) =>
        sunrise && sunset

    updateLocation = (data) => {
        if (this.isValidSunData(data)) {
            this.setState(SunDetails(data));
        }
    }

    onRemoveLocation = () =>
        this.props.onClickButton(this.props.index);

    render() {
        const { name, lat, lon } = this.props;
        const { sunrise, sunset } = this.state;
        const dayLightProperties = { sunrise, sunset };

        if (!this.isValidSunData(dayLightProperties)) {
            return null;
        }

        return (
            <div className="location">
                <strong>{name}</strong>, {lat}, {lon}; Sunrise: {sunrise}, Sunset: {sunset}
                <DayLightAnimation {...dayLightProperties}/>
                <Button
                    className="removeButton"
                    label="remove"
                    onClick={this.onRemoveLocation}
                />
            </div>
        );
    }
}
