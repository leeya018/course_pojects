import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Links from '../Links';

import Main from '../Main';
import About from '../About';
import WhyWe from '../WhyWe';
import ForWho from '../ForWho';
import PracticeProgram from '../PracticeProgram';



// import './NavBar.css';

class NavBar extends Component {

  render() {``
    return (
      <div className="NavBar">
        <Router>
          <div>
          <Links/>
          <Switch>
            <Route  path="/main" render={()=>< Main />}/>
            <Route path="/about" render={()=>< About />}/>
            <Route  path="/whywe" render={()=>< WhyWe />}/>
            <Route  path="/forwho" render={()=>< ForWho />}/>
            <Route exact path="/" render={()=>< PracticeProgram />}/>
            {/* practiceProgram */}

            
            <Route component={() => <h1>Oops.. page not found</h1>}/>
          </Switch>
          </div>
        </Router>
      </div>

    );
  }
}

export default NavBar;
