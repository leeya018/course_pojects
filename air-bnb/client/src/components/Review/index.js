import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Rating from '../Rating';
import './Review.css'

export default function Review({ review }) {
    const { title, name, content, userImageUrl, rating, date } = { ...review }
    let urlStyle = { backgroundImage: `url(${userImageUrl} )` }

    return (
        <div className="reviewMain">
            <div className="review">
                <div className="reviewHead">
                    <div className="reviewHeadNoRating">
                        <div className="reviewImage" style={urlStyle}></div>
                        <div className="reviewNameDate">
                            <div className="reviewTitle"><h3>{title}</h3></div>
                            <div className="reviewName">{name}:</div>
                            <div className="reviewDate">{date}</div>
                        </div>
                    </div>
                    <div ><Rating rate={rating} /></div>
                </div>
                <div className="reviewContent">
                    <div>{content}</div>
                </div>
                <hr />
            </div>
        </div>


    )
}

