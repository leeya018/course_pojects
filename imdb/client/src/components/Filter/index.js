import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import './Filter.css'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.startFilter = this.startFilter.bind(this)
    }

    startFilter({ target }) {
        let val = target.value
        let fl = this.props.moviesData.filter((item) => item.title.toLowerCase().includes(val))
        this.props.updateFilterList(fl)
    }
    render() {
        return (
            <div className="filter">
                <Link to={'/postMovie'}>
                    <div className="add1Link"></div>
                </Link>
                <input type="text" onChange={this.startFilter} />
            </div>
        )
    }

}


export default Filter