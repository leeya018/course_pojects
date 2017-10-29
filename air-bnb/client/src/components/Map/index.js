import React, { Component } from 'react';
import "./Map.css";


class Map extends Component {
    constructor(props) {
        super();
        this.markers = []
    }

    componentDidMount() {
        let location = this.props.locationList[0]
        let center  =(!location)?{ lat: 31, lng: 31 }: { lat: location.lat, lng: location.lng }
        this.map = new window.google.maps.Map(this.refs.map, {
            zoom: 8,
            center: center
        });
        this.addMarkers()
    }

    removeMarkers() {
        for (let marker of this.markers) {
            marker.setMap(null)
        }
    }

    addMarkers() {
        let marker
        let i = 0
        let locationList = this.props.locationList
        for (let location of locationList) {
            let cord = { lat: location.lat, lng: location.lng }
            let label = (this.props.prices[i]).toString() + '₪'
            marker = new window.google.maps.Marker({
                position: cord,
                map: this.map,
                label: { text: label, color: "black" }
            });
            this.markers.push(marker)
            i++;
        }
    }

    render() {
        this.removeMarkers()
        this.addMarkers()
        return (
            <div>
                <div ref="map" className="map"></div>
            </div>
        );
    }
}

export default Map;