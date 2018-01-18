import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FacebookLogin from 'react-facebook-login';
import './App.css';

const responseFacebook = response => {
  console.log(response);
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <FacebookLogin
          appId="1662101810545915"
          autoLoad={true}
          fields="name,email,picture"
          callback={responseFacebook}
        />
      </div>
    );
  }
}

export default App;
