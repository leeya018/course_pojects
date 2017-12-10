import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Links from '../Links';

import Main from '../Main';
import About from '../About';

// import './NavBar.css';

class NavBar extends Component {

  render() {``
    return (
      <div className="NavBar">
        <Router>
          <div>
          <Links/>
          <Switch>
            <Route exact path="/main" component={< Main />}/>
            <Route path="/about" component={< About />}/>
            <Route component={() => <h1>Oops.. page not found</h1>}/>
          </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default NavBar;
