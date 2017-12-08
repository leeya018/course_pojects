import React, { Component } from 'react';
import './postMovie.css'
import api from '../App/api.js'

class PostMovie extends Component {
    constructor(props) {
        super(props)
        this.state = { title: '', year: '', director: '', cast: '', imageUrl: '', imdbUrl: '' }
        this.postMovie = this.postMovie.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
    }
    handleOnChange({ target }) {
        this.setState({ [target.name]: target.value })
    }
    postMovie() {
        let len = this.props.moviesData.length
        let lastId = this.props.moviesData[len-1].id
        let { title, year, director, cast, imageUrl, imdbUrl } = this.state
        let newMovie = {
            "id": lastId+1,
            "title": title,
            "year": year,
            "director": director,
            "cast": [
                cast
            ],
            "imageUrl": imageUrl,
            "imdbUrl": imdbUrl
        }
        api.addMovie(newMovie)
    }
    render() {
        let { title, year, director, cast, imageUrl, imdbUrl } = this.state
        return (
            <div className="postMovie">
                <h1>Add Movie:</h1>
                <input type="text" placeholder="title" name="title" value={title} onChange={this.handleOnChange} />
                <input type="text" placeholder="year" name="year" value={year} onChange={this.handleOnChange} />
                <input type="text" placeholder="director" name="director" value={director} onChange={this.handleOnChange} />
                <input type="text" placeholder="cast" name="cast" value={cast} onChange={this.handleOnChange} />
                <input type="text" placeholder="imageUrl" name="imageUrl" value={imageUrl} onChange={this.handleOnChange} />
                <input type="text" placeholder="imdbUrl" name="imdbUrl" value={imdbUrl} onChange={this.handleOnChange} />
                <button onClick={this.postMovie}>add</button>
            </div>
        )
    }

}

export default PostMovie;