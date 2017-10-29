import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import "./NavBar.css";
import Home from '../Home';
import Login from '../Login';
import Logout from '../Logout';
import HomesList from '../HomesList';
import Filter from '../Filter'
import SignUp from '../SignUp'

class NavBar extends React.Component {
    constructor(props) {
        super(props)
        let homes = props.homes
        let user = user?JSON.parse(localStorage.getItem('bnb-user')):''
        this.state = { filteredList: homes, originalList: homes, isLogged: this.checkLogin(), user }
        this.updateList = this.updateList.bind(this)
        this.findHome = this.findHome.bind(this)
        this.updateLoginStatus = this.updateLoginStatus.bind(this)
        this.logout = this.logout.bind(this)
        this.updateUser = this.updateUser.bind(this)
        this.getRelevantComp = this.getRelevantComp.bind(this)
    }

    checkLogin() {
        return (localStorage['bnb-token']) ? true : false
    }

    updateUser(user) {
        debugger
        this.setState({ user })
    }

    logout() {
        debugger
        localStorage['bnb-token'] = ''
        localStorage['bnb-user'] = ''
        this.setState({ isLogged: false,user:'' })
    }

    updateLoginStatus(isLogged) {
        this.setState({ isLogged })
    }

    findHome(homes, paramsId) {
        let foundHome, flagHome = false
        for (let home of homes) {
            if (home['_id'] === paramsId) {
                foundHome = home
                break;
            }
        }
        return foundHome
    }

    getRelevantComp(history) {
        let chosenComp;
        let isLogged = this.state.isLogged
        return (isLogged) ? <HomesList homes={this.state.filteredList} history={history} /> : <Login updateLoginStatus={this.updateLoginStatus} history={history} />
    }

    getRelevantPath() {
        let isLogged = this.state.isLogged
        return isLogged ? '/' : '/login'
    }

    updateList(fl) {
        this.setState({ filteredList: fl });
    }
    getUserStyle() {
        let {user} = this.state
        return user ? { "backgroundImage": `url(${user.imageUrl})` } : null

    }

    render() {
        let { filteredList, originalList, markers, isLogged, user } = this.state
        debugger
        let styleUrl = this.getUserStyle()
        let styleUrlDefault = { "backgroundImage": "url('https://cdn0.iconfinder.com/data/icons/PRACTIKA/256/user.png')" }

        return (
            <div className="navBar" >
                <Router>
                    <div>
                        <div className="nav">
                            <div className="ulNav">
                                <ul>
                                    {!isLogged &&
                                        <li><Link to='/login' style={{ textDecoration: 'none' }}> Login</Link> </li>
                                    }
                                    {isLogged &&
                                        <li><Link to='/login' onClick={this.logout} style={{ textDecoration: 'none' }}>Logout</Link></li>
                                    }
                                    <li><Link to='/' style={{ textDecoration: 'none' }}>HomesList</Link></li>
                                    <li><Link to='/signUp' style={{ textDecoration: 'none' }}>SignUp</Link></li>
                                </ul>
                            </div>
                            <Filter updateList={this.updateList} originalList={originalList} />
                            {user &&
                                <div>hello {user.firstName} {user.lastName}</div>
                            }
                            {/*<div className="yourImg"></div>*/}
                            <div className="yourImg" style={styleUrl || styleUrlDefault}></div>

                        </div>
                        <hr />
                        <Route exact path='/' render={({ history }) => <HomesList isLogged={isLogged} homes={this.state.filteredList} history={history} />}></Route>
                        <Route exact path='/login' render={({ history }) => <Login updateUser={this.updateUser} updateLoginStatus={this.updateLoginStatus} history={history} />}></Route>

                        <Route path='/homes/:id' render={({ match }) => {
                            return <Home match={match} id={match.params.id} />
                        }}></Route>

                        <Route path='/signUp' render={({ history }) => {
                            return <SignUp history={history} />
                        }}  ></Route>
                    </div>
                </Router>
            </div >

        );
    }
}


export default NavBar;



