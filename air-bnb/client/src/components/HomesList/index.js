import React from "react";
import HomePreviewClicker from '../HomePreviewClicker'
import Locations from '../Locations'
import Map from '../Map'
import './HomesList.css';

class HomesList extends React.Component {
    constructor(props) {
        super();
        if (!props.isLogged) {
            props.history.push('/login')
        }
    }

    getLocations() {
        let locations = []
        for (let home of this.props.homes) {
            locations.push(home.address)
        }
        return locations
    }

    getPrices() {
        let prices = []
        for (let home of this.props.homes) {
            prices.push(home.price)
        }
        return prices
    }

    render() {
        let prices = this.getPrices()
        let homeList = this.props.homes.map((home, index) => <HomePreviewClicker key={index} home={home} />)
        let locationList = this.getLocations()

        return (
            <div className="homeListLocations">
                <div className="homeListItems">{homeList}</div>
                <Map locationList={locationList} prices={prices} />
            </div>
        )
    }
}


export default HomesList;