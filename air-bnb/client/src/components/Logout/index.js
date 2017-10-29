import React, { Component } from "react";
import "./Logout.css";

class Logout extends Component {

    constructor() {
        super()
        console.log('LOGOUT')

    }

    render() {
        this.props.history.push('/login')
        this.props.logout()
        return (
            <div className='logout'><h1>You are Logout</h1></div>
        )
    }
}


export default Logout