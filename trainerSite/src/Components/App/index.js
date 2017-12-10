import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header'
import SecondHeader from '../SecondHeader'
import NavBar from '../NavBar'

import './App.css';

class App extends Component {
  render() {
    return (
     <LocaleProvider locale={enUS}>
      <div className="app">
          <Header/>
          <div className="middleContainer">
          <div className="colContainer">
            <SecondHeader/>
            <NavBar/>
          </div>
        </div>
      </div> 
    </LocaleProvider>
        )
  }
}

export default App;