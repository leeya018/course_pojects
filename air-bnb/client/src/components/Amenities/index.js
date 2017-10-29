import React from "react";
import "./Amenities.css";
import Amenity from "../Amenity";

class Amenities extends React.Component {
  constructor({ amenities }) {
    super()
    this.amenities = amenities
  }
  render() {
    let amenities = this.amenities;
    let amenitiesHtml = amenities.map((amenity, index) => <Amenity key={index} value={amenity} />)
    return (
      <div className="amenities">
        <div><h4>Amenities:</h4></div>
        <div className="amenitiesList">{amenitiesHtml}</div>
      </div>
    )
  }
}

export default Amenities;
