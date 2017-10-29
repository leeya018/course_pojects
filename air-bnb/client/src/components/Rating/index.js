import React, { Component } from 'react';
import classNames from 'classnames'
import './Rating.css'

export default ({ rate }) => {

    function renderStars() {
        var max_stars = 5
        let stars = []
        if (rate > 5) {
            throw new TypeError('cannot more than 5')
        }
        else if (rate < 1) {
            throw new Error('cannot less than 1')
        }
        var i = 0;
        while (i < max_stars) {
            const cl = classNames({
                'fa': true,
                'fa-star': i < rate,
                'fa-star-o': i >= rate,
            })
            let star = <i key={i} className={cl} ></i>
            stars.push(star)
            i++;
        }
        return stars;
    }

    return (
        <div className="rateStars">
            {renderStars()}
        </div>
    )
}

