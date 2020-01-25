import React from 'react';
import { convertDateToPercentages } from '../../Utils/Formatters';

export class DayLightAnimation extends React.PureComponent {

    getStyles = () => {
        const { sunrise, sunset } = this.props;

        const left = convertDateToPercentages(sunrise);
        const right = convertDateToPercentages(sunset);
        const gradientValue = left < right
            ? `#000 ${left}%, yellow ${left}%, yellow ${right}%, #000 ${right}%, #000 100%)`
            : `yellow 0%, yellow ${right}%, #000 ${right}%, #000 ${left}%, yellow ${left}%, yellow 100%)`;

        return {
            background: `repeating-linear-gradient(to right, #000, ${gradientValue}`
        };
    };

    render() {
        return (
            <div
                className="locationBar"
                style={this.getStyles()}
            />
        );
    }
}
