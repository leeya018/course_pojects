import React, { Component } from 'react';
import './SideBar.css'

class SideBar extends Component {

    constructor(props) {
        super(props)
        this.filterDirectors = this.filterDirectors.bind(this)
        this.filterActors = this.filterActors.bind(this)
    }
    directorsCheck() {
        return this.props.moviesData.reduce((directors, movie) => {
            (movie.director in directors) ? directors[movie.director]++ : directors[movie.director] = 1
            return directors
        }, {})
    }

    actorsCheck() {
        return this.props.moviesData.reduce((actors, movie) => {
            for (let actor of movie.cast) {
                (actor in actors) ? actors[actor]++ : actors[actor] = 1
            }
            return actors
        }, {})
    }

    filterDirectors({ target }) {
        let key = target.getAttribute("data-val")
        let fl = this.props.moviesData.filter((movie) => movie.director === key)
        this.props.updateFilterList(fl)
    }

    filterActors({ target }) {
        let key = target.getAttribute("data-val")
        let fl = this.props.moviesData.filter((movie) => {
            for (let actor of movie.cast) {
                if (actor === key) {
                    return true
                }
            }
            return false
        })
        this.props.updateFilterList(fl)
    }





    render() {
        let directors = this.directorsCheck()
        let actors = this.actorsCheck()

        let directorsEl = [];
        let actorsEl = []

        for (let key in directors) {
            directorsEl.push(<div className="director" key={key} data-val={key} onClick={this.filterDirectors}>{key + '(' + directors[key] + ')'}</div>)
        }
        for (let key in actors) {
            actorsEl.push(<div className="actor" key={key} data-val={key} onClick={this.filterActors}>{key + '(' + actors[key] + ')'}</div>)
        }
        return (
            <div className="aside">
                <h1 className="directorTitle">Directors:</h1>
                <div>{directorsEl}</div>
                <h1 className="actorTitle">Actors:</h1>
                <div >{actorsEl}</div>
            </div>

        )
    }
}

export default SideBar;