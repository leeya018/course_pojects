import React, { Component } from 'react';
import "./Location.css";

class Location extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { country, city, street, number } = { ...this.props.address }
        return (
            <div>
                <div><h3>Locatoin Data:</h3></div>
                <div>{country}</div>
                <div>{city}</div>
                <div>{street} {number}</div>
            </div>
        );
    }
}

export default Location;