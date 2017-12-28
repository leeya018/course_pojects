import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import ScrollEvent from 'react-onscroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header'
import SecondHeader from '../SecondHeader'
import NavBar from '../NavBar'
import Footer from '../Footer'

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleScroll = this
      .handleScroll
      .bind(this)
  }
  componentDidMount() {


  }
  handleScroll=()=> {
    debugger
   let s  = document.documentElement.scrollTop
    console.log(s)
  }
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <Router>
          <div className="app">
            <Header/>
            <div className="middleContainer">
              <div className="colContainer">
                <SecondHeader/>
                
                <NavBar/>
                {/* <Footer/> */}
              </div>
            </div>
          </div>
        </Router>
      </LocaleProvider>
    )
  }
}

export default App;