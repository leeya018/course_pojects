import React, {Component} from 'react';
import Header from '../Header'
import SecondHeader from '../SecondHeader'
import NavBar from '../NavBar'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header/>
        <div className="pageContainer">
          {<SecondHeader/>}
          {/* <NavBar /> */}
        </div>
      </div>

    );
  }
}

export default App;
