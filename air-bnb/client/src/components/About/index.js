import React from "react";
import "./About.css";
import Rating from '../Rating'
import RatingSum from '../RatingSum'

class About extends React.Component {
    constructor({ home }) {
        super();
        this.home = home
        this.showInfo = this.showInfo.bind(this)

    }
    showInfo({ target }) {
        target.style.display = 'none';
        this.$general.style.display = 'block';

    }
    render() {
        let home = this.home;
        let { title, type, generalDesc, guestAccess, others, price } = { ...home }
        let { description, guests, beds, bedrooms, bath } = { ...home.theSpace }
        let { imageUrl, name } = { ...home.owner }
        let urlStyle = { backgroundImage: `url(${imageUrl} )` }
        let reviewsLen = home.reviews.length;
        let rateAvgVal = home.reviews.reduce(function (sum, review) { return sum + review.rating }, 0) / reviewsLen;

        return (
            <div>
                <div className="container">
                    <div className="first">
                        <div className="titleType">
                            <div className="title"><h2>{title}</h2></div>
                            <div className="typeRate">
                                <div className="type">{type}</div>
                                <RatingSum reviews={home.reviews} />
                            </div>
                        </div>
                        <div className="owner">
                            <div className="pulishImg" style={urlStyle}></div>
                            <div className="aboutName"><span>{name}</span></div>
                        </div>
                    </div>
                    <div className="theSpace">
                        <div className="theSpaceNoDesc">
                            <i className="fa fa-male" aria-hidden="true"></i>
                            <div>{guests} guests</div>
                            <i className="fa fa-bed" aria-hidden="true"></i>
                            <div>{beds} beds</div>
                            <i className="fa fa-building" aria-hidden="true"></i>
                            <div>{bedrooms} bedrooms</div>
                            <i className="fa fa-bath" aria-hidden="true"></i>
                            <div>{bath} bath</div>
                        </div>
                        <div className="desc">
                            <div className="spaceTitle"><h4>The Space</h4></div>
                            <div className="description">{description}</div>
                        </div>
                        <div className="constactHost">Contact host</div>
                    </div>
                    <div className="generalA">
                        <div className="moreInfo" onClick={this.showInfo}>+ More</div>
                        <div className="general" ref={(el) => { this.$general = el }}>
                            <div>{generalDesc}</div>
                            <div>{guestAccess}</div>
                            <div>{others}</div>
                            <div>price : {price}</div>
                        </div>
                    </div>
                    <div><hr /></div>
                </div>
            </div>

        )
    }
}

export default About;
