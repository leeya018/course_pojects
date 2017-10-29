import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import RatingSum from '../RatingSum';
import './HomePreview.css';

export default ({home}) => {

    let imageStyle = { backgroundImage: `url(${home.imageUrl} )` };
    return (
        <div className="homePrevirew" >
            <div className="previewImage" style={imageStyle}></div>
            <div className="previewBed">{(home.type + ' . ' + home.theSpace.beds).toUpperCase()}</div>
            <div className="previewTitle"><h2>{home.title}</h2></div>
            <div className="previewPrice">₪{home.price} per night</div>
            <RatingSum reviews={home.reviews} />
        </div>
    )
}

