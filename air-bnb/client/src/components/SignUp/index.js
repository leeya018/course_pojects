import React, { Component } from "react";
import axios from 'axios'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import './SignUp.css'

class SignUp extends Component {
    constructor(props) {
        super(props)
        this.firstName = ''
        this.lastName = ''
        this.userName = ''
        this.password = ''
        this.signUp = this.signUp.bind(this)
        this.updateField = this.updateField.bind(this)
        console.log('rout - ', props)
    }

    updateField({ target }) {
        this[target.name] = target.value
    }

    async sendUser(user) {
        let response = await axios.post('api/users', user)
        return response.data
    }

    signUp(el) {
        let { firstName, lastName, userName, password, imageUrl } = this
        let user = { firstName, lastName, userName, password, imageUrl }

        let data = this.sendUser(user)
        data.then((user) => {
            console.log(user)
            // this.props.updateUser(user)
        })
        this.props.history.push('/login')
    }

    render() {
        let linkStyle = { textDecoration: 'none' }
        return (
            <div className="signUp">
                <div>Sign up with Facebook or Google</div>
                <input type="text" name="firstName" placeholder="firstName" onChange={this.updateField} />
                <input type="text" name="lastName" placeholder="lastName" onChange={this.updateField} />
                <input type="text" name="userName" placeholder="userName" onChange={this.updateField} />
                <input type="text" name="password" placeholder="password" onChange={this.updateField} />
                <input type="text" name="imageUrl" placeholder="imageUrl" onChange={this.updateField} />

                <button onClick={this.signUp}>Sign Up</button>
                <div>Already have an Airbnb account?<Link to="/" style={linkStyle}>&nbsp;Log in</Link></div>
            </div>
        )
    }

}

export default SignUp;