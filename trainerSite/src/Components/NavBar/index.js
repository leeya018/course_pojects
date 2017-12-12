import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Links from '../Links';

import Main from '../Main';
import About from '../About';
import WhyWe from '../WhyWe';
import ForWho from '../ForWho';
import PracticeProgram from '../PracticeProgram';
import Tips from '../Tips';
import Contact from '../Contact';
import Email from '../Email';
import Program from '../Program';




// import './NavBar.css';

class NavBar extends Component {

  render() {
    return (
      <div className="NavBar">
        <Router>
          <div>
          <Links/>
          <Switch>
            <Route  exact path="/" render={()=>< Main />}/>
            <Route  path="/about" render={()=>< About />}/>
            <Route  path="/whywe" render={()=>< WhyWe />}/>
            <Route  path="/forwho" render={()=>< ForWho />}/>
            <Route  path="/practiceProgram" render={()=>< PracticeProgram />}/>
            <Route  path="/tips" render={()=>< Tips />}/>
            <Route  path="/contact" render={()=>< Contact />}/>
            <Route  path="/email" render={()=>< Email />}/>
            <Route  path="/program/:name" render={({match})=>< Program match={match} />}/>
            
            
            
            
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
