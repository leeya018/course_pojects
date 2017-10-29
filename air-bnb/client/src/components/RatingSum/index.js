import React from "react";
import Rating from "../Rating";
import "./RatingSum.css";

export default ({ reviews }) => {
    let reviewsLen = reviews.length;
    let rateAvgVal = reviews.reduce(function (sum, review) { return sum + review.rating }, 0) / reviewsLen;
    return (
        <div className="rate">
            <div><Rating rate={rateAvgVal} /></div>
            <div className="reviewsLen">{reviewsLen} reviews</div>
        </div>
    )
}








