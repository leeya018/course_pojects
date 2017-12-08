import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './MoviePreview.css'

export default ({ movie }) => {
    let casts = movie.cast.map((item, index) => <p key={index}>item</p>)
    let movieUrl = `movies/${movie.id}`
    return (
        <Link to={movieUrl}  style={{ textDecoration: 'none' }}>
            <div className="moviePreview">
                <h2>{movie.title}</h2>  
                <img src={movie.imageUrl} />
            </div>
        </Link>
    )
}
