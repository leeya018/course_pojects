import React from "react";
import axios from "axios"
import "./Home.css";
import About from '../About';
import Amenities from '../Amenities';
import RatingSum from '../RatingSum';
import ReviewList from '../ReviewList';
import ReviewForm from '../ReviewForm';
import ReviewApp from '../ReviewApp';
import Location from '../Location';
import Jumbotron from '../Jumbotron';
import MediumBar from '../MediumBar';
import Map from '../Map';
import Book from '../Book';

class Home extends React.Component {
    constructor({ match, id }) {
        super()
        this.id = match.params.id
        this.state = { home: '' }
    }

    async componentWillMount() {
        try {
            let response = await axios.get(`/api/homes/${this.id}`)
            let home =  response.data
            this.setState({ home })
        } catch (e) {
            console.log(e, 'EERR home')
        }
    }
    
    render() {
        let home = this.state.home
        return (
            <div className="home">
                {home &&
                    <div>
                        <Jumbotron imageUrl={home.imageUrl} />
                        <MediumBar />
                        <div className="detailsBook">
                            <div className="details">
                                <div className='homeBook'>
                                    <About home={home} />
                                    <Book occupancy={home.occupancy} price={home.price} homeId={this.id} />
                                </div>
                                <Amenities amenities={home.amenities} />
                                <hr />
                                <div className='sumReviewLocation'>
                                    <RatingSum reviews={home.reviews} />
                                    <ReviewApp reviews={home.reviews} homeId={this.id} />
                                    <Location address={home.address} />
                                    <Map locationList={[home.address]} prices={[home.price]} />
                                </div>
                            </div>

                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Home;



