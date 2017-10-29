import React, { Component } from "react";
import axios from 'axios'
import "./Login.css";

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = { loginMsg: '' }
        this.login = this.login.bind(this)
        this.clearLoginMsg = this.clearLoginMsg.bind(this)
    }

    async loginFunc() {
        let username = this.$username.value
        let password = this.$password.value
        let cred = { username, password }
        return await axios.post('/api/login', cred)
    }

    login() {
        this.loginFunc().then((data) => {
            console.log(data.data.token)
            setTimeout(() => {
                let { token, user } = data.data
                if (token) {
                    this.props.updateLoginStatus(true)
                    debugger
                    this.props.updateUser(user)
                    localStorage['bnb-token'] = token
                    localStorage['bnb-user'] = JSON.stringify(user)
                    
                    this.props.history.push('/')
                } else {
                    this.setState({ loginMsg: 'user or pass are wrong' })
                }
            }, 100)
        })
    }

    clearLoginMsg() {
        this.setState({ loginMsg: '' })
    }

    render() {
        let loginMsg = this.state.loginMsg
        return (
            <div className='login'>
                <div>user : <input type="text" placeholder='user' onClick={this.clearLoginMsg} ref={(el) => { this.$username = el }} /></div>
                <div>pass : <input type="text" placeholder='pass' onClick={this.clearLoginMsg} ref={(el) => { this.$password = el }} /></div>
                <div className="btnDiv"><button onClick={this.login}>Login</button></div>
                <div>{loginMsg}</div>
            </div>
        )
    }

}



export default Login;