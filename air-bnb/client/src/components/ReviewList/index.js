import React from "react";
import Review from '../Review';
import "./ReviewList.css";

export default ({ reviews }) => {

    function renderReviews() {
        return reviews.map((review, index) => <Review key={index} review={review} />)
    }
    return (
        <div className="reviewList">
            <div><h3>Reviews</h3></div>
            <div className="reviewList">{renderReviews()}</div>
        </div>
    )

}


