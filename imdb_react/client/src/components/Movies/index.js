import React, { Component } from 'react';
import './movies.css'
import MoviePreview from '../MoviePreview'

class Movies extends Component {

    constructor(props) {
        super(props)
    }
    render() {
        let { filterMovies } = this.props
        let movies = filterMovies.map((item, index) => <MoviePreview movie={item} key={index} />)
        return (
            <div className="moviesContainer">
                <div className="movies">
                    {movies}
                </div>
            </div>
        )
    }
}

export default Movies;