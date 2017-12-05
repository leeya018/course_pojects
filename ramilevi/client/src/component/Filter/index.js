import React, { Component } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng
} from "react-places-autocomplete";
import geolib from "geolib";
import "./filter.css";

class Filter extends Component {
  constructor(props) {
    super(props);
    // const distVal = 10600;
    this.state = { location: "", distVal: 12114 };
    this.updateLocation = this.updateLocation.bind(this);
    this.filterLocation = this.filterLocation.bind(this);
    this.findLatLng = this.findLatLng.bind(this);
  }

  updateLocation(location) {
    this.setState({ location });
  }

  findLatLng() {
    geocodeByAddress(this.state.location)
      .then(results => getLatLng(results[0]))
      .then(latLng => {
        console.log(latLng);
        this.filterLocation(latLng);
      })
      .catch(error => console.error("Error", error));
  }
  addDist(storeArr, latLng) {
    for (let store of storeArr) {
      store.dist =
        geolib.getDistance(latLng, {
          latitude: store.lon,
          longitude: store.lat
        }) / 1000;
    }
    console.log(storeArr);
  }
  filterLocation(latLng) {
    let storeArr = [...this.props.stores];
    this.addDist(storeArr, latLng);
    storeArr.sort(function(storeA, storeB) {
      return storeA.dist - storeB.dist;
    });
    console.log(storeArr);
    this.checkWinner();
    this.props.updateFl(storeArr);
  }

  checkWinner() {
    let tableWin = {
      nadia: 0,
      ramilevi: 0,
      shufersal: 0,
      mega: 0
    };
    this.props.stores.map(store => {
      if (store.dist < this.state.distVal) {
        tableWin[store.title]++;
      }
    });
    let winnerTitle = "";
    let winnerNumber = 0;

    for (let key in tableWin) {
      if (tableWin[key] > winnerNumber) {
        winnerTitle = key;
        winnerNumber = tableWin[key];
      }
    }
    this.props.updateWinner(winnerTitle);
  }
  render() {
    const inputProps = {
      value: this.state.location,
      onChange: this.updateLocation
    };
    return (
      <div className="filter">
        <div className="autoComplete">
          <PlacesAutocomplete inputProps={inputProps} />
        </div>
        <button onClick={this.findLatLng}>Send</button>
      </div>
    );
  }
}

export default Filter;
