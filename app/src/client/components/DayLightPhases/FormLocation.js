import React from 'react';

export class FormLocation extends React.Component {
    render() {
        const { onSubmit } = this.props;

        return (
            <form onSubmit={onSubmit}>
                <label>
                    City: <input required={true} type="text" name="name"/>
                </label>
                <label>
                    Latitude: <input required={true} type="number" name="lat" step="any"/>
                </label>
                <label>
                    Longitude: <input required={true} type="number" name="lon" step="any"/>
                </label>
                <input type="submit" value="Add new city" />
            </form>
        );
    }
}
