import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './movie.css'
import api from '../App/api.js'

class Movie extends Component {
    constructor(props) {
        super()
        this.state = { movie: null }
        api.getMovie(props.id).then((movie) => {
            this.setState({ movie })
        })
        this.deleteMovie = this.deleteMovie.bind(this)
    }

    removeItem(id) {
        let newMovies = []
        let movies = this.props.moviesData
        for (let movie of movies) {
            if (movie.id !== id) {
                newMovies.push(movie)
            }
        }
        return newMovies
    }
    deleteMovie() {
        let id = this.state.movie.id
        api.deleteMovie(id)
        let newMovies = this.removeItem(id)
        this.props.updateFilterList(newMovies)
        this.props.updateMovieList(newMovies)
        
    }
    getCasts() {
        return this.state.movie.cast.map((item, index) => <p key={index}>{item}</p>)

    }

    render() {
        let { movie } = this.state
        return (
            <div>
                {movie && <div className="movie">
                    <Link to={'/'}>
                        <div className="deleteLink" onClick={this.deleteMovie}></div>
                    </Link>
                    <h2>{movie.title}</h2>
                    <p className="year">{movie.year}</p>
                    <h3>Directors:</h3>
                    <p className="director">{movie.director}</p>
                    <h3>Actors:</h3>
                    {this.getCasts()}
                    <img className="singleImg" src={movie.imageUrl} />
                </div>}
            </div>

        )
    }

}


export default Movie;