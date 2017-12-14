import React, {Component} from 'react';
import {LocaleProvider} from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import ReactDOM from 'react-dom';
import ScrollEvent from 'react-onscroll';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from '../Header'
import SecondHeader from '../SecondHeader'
import NavBar from '../NavBar'
import Footer from '../Footer'

import './App.css';

class App extends Component {
constructor(){
  super()
  this.handleScroll=this.handleScroll.bind(this)
}
componentDidMount(){
  window.addEventListener('scroll', this.handleScroll);

}
  handleScroll({target}){
    let s = target.body.scrollHeight
    console.log(s)
  }
  render() {
    return (
      <LocaleProvider locale={enUS}>
        <div className="app" >
          <Header/>
          <div className="middleContainer">
            <div className="colContainer">
              <SecondHeader/>
              <NavBar/>
              <Footer/>
            </div>
          </div>
        </div>
      </LocaleProvider>
    )
  }
}

export default App;