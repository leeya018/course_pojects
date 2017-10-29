import React, { Component } from 'react';
import Location from '../Location';

export default ({ locations }) => {
    let locationList = locations.map((location, index) => <Location />)
    return (
        <div>{locationList}</div>
    )
}