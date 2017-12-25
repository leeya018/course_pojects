import React, { Component } from 'react';
import IphoneNav from '../Links/IphoneNav';
import './SecondHeader.css';

import logo from './logo.svg';

class SecondHeader extends Component {

  render() {
    return (
      <div className="secondHeader">
        <IphoneNav />
        <div>React is the best</div>
        <div className="reactIcon"><img src={logo} className="App-logo" alt="logo" /></div>
      </div>
    );
  }
}

export default SecondHeader;
