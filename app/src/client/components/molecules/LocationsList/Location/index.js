// @flow
import React from 'react';
import { fetchSunriseSunsetData } from '../../../../utils/serviceCalls';
import {
    Button,
    DayLightAnimation
} from '../../../atoms';
import type { SunDetails as SunDetailsType } from '../../../../types';
import { SunDetails } from '../../../../model';
import './style.css';

type Props = {
    lat: number,
    lon: number,
    date?: string,
    onClickButton: Function,
    index: number,
    name: string
};

type State = {
    ...SunDetailsType
};

export class Location extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = SunDetails();
    }

    shouldComponentUpdate (
        nextProps: Props,
        {
            sunrise: nextSunrise,
            sunset: nextSunset
        }: State
    ): boolean {
        const {
            sunrise,
            sunset
        } = this.state;

        return nextSunrise !== sunrise || nextSunset !== sunset;
    }

    componentDidMount() {
        const { lat, lon, date } = this.props;

        fetchSunriseSunsetData(lat, lon, date)
            .then(this.updateLocation);
    }

    isValidSunData = ({ sunrise, sunset }: State = {}) =>
        sunrise && sunset;

    updateLocation = (data: State) => {
        if (this.isValidSunData(data)) {
            this.setState(SunDetails(data));
        }
    };

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
