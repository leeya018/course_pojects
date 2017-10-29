import React from "react";
import template from "./MediumBar.css";

class MediumBar extends React.Component {
    render() {
        return (
            <div className="mediumBar">
                <ul>
                    <li>Overviews</li>
                    <li>Reviews</li>
                    <li>Host</li>
                    <li>Location</li>
                </ul>
            </div>
        )
    }
}

export default MediumBar;
