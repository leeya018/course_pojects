import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Movie from '../Movie'

export default () => {

    return (
        <Route path='/:id' render={({ match }) => {
            return <Movie id={match.params.id} />
        }}></Route>
    )

}


