import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './App.css';
import Movies from '../Movies'
import Filter from '../Filter'
import SideBar from '../SideBar'
import Movie from '../Movie'
import PostMovie from '../PostMovie'
import api from './api.js'

class App extends Component {
  constructor() {
    super()
    let moviesData, filterMovies
    this.state = { moviesData: null, filterMovies: null }
    api.getMovies().then((movies) => {
      moviesData = movies
      filterMovies = moviesData
      this.setState({ moviesData, filterMovies })
    })

    this.updateFilterList = this.updateFilterList.bind(this)
    this.updateMovieList = this.updateMovieList.bind(this)

  }

  updateFilterList(fl) {
    this.setState({ filterMovies: fl })
  }

  updateMovieList(md) {
    this.setState({ moviesData: md })
  }
  render() {
    let { filterMovies, moviesData } = this.state

    return (
      <div className="App">
        <Router>
          {filterMovies && <div className="content">
            <div className="header">
              <h1>IMDB- best moovies</h1>
            </div>
            <div className="search">
              <Filter moviesData={moviesData} updateFilterList={this.updateFilterList} />
            </div>
            <Route path='/movies/:id' render={({ match }) => {
              return <Movie id={match.params.id} updateFilterList={this.updateFilterList} moviesData={moviesData} updateMovieList={this.updateMovieList} />
            }}></Route>
            <Route exact path='/' render={({ match }) => {
              return <Movies className="main" filterMovies={filterMovies} />
            }}></Route>

            <Route path='/postMovie' render={({ match }) => {
              return <PostMovie moviesData={moviesData} />
            }}></Route>


            {/*<Movies className="main" filterMovies={filterMovies} />*/}

            <SideBar moviesData={moviesData} updateFilterList={this.updateFilterList} />

          </div>}
        </Router>
      </div>
    );
  }
}

export default App;
