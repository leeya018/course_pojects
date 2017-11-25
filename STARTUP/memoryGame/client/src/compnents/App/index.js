import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import enUS from 'antd/lib/locale-provider/en_US';
import { LocaleProvider } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MyRouter from '../MyRouter';

import api from '../App/api';

class App extends Component {
  constructor(props, context) {
    super(props, context);

  }

  render() {
    return (
      <LocaleProvider locale={enUS}>
        <MyRouter />
      </LocaleProvider>
    );
  }
}

export default App;
