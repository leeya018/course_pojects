import React, { Component } from 'react';
import "./Amenity.css";

export default ({ value }) => {
    let icons = {
        Kitchen: "fa-cutlery",
        Internet: "fa-internet-explorer",
        TV: "fa-television",
        AC: "fa-bolt",
        Phone: "fa-volume-control-phone"
    }

    function getIcon() {
        return <i aria-hidden="true" className={"fa " + icons[value]}></i>
    }

    return (
        <div className="amenity">
            <div>{getIcon()}</div>
            <div>{value}</div>
        </div>
    )
}




