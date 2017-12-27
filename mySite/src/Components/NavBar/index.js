import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Links from '../Links';

import Main from '../Main';
import About from '../About';
import Experience from '../Experience';
import Education from '../Education';
import MyProjects from '../MyProjects';
import Tips from '../Tips';
import Contact from '../Contact';
import Email from '../Email';
import Program from '../Program';
import './NavBar.css';


class NavBar extends Component {

  render() {
    return (
      <div className="navBar">
          <div>
            <Links />
            <div className="navContent">
              <Switch >
                <Route exact path="/" render={() =>< Main />}/>
                <Route path="/about" render={() =>< About />}/>
                <Route path="/experience" render={() =>< Experience />}/>
                <Route path="/education" render={() =>< Education />}/>
                <Route path="/myProjects" render={() =>< MyProjects />}/>
                <Route path="/tips" render={() =>< Tips />}/>
                <Route path="/contact" render={() =>< Contact />}/>
                <Route path="/email" render={() =>< Email />}/>
                <Route
                  path="/program/:name"
                  render={({match}) =>< Program match = {
                  match
                } />}/>

                <Route component={() => <h1>Oops.. page not found</h1>}/>
              </Switch>
            </div>
          </div>
      </div>

    );
  }
}

export default NavBar;
