import React, { Component } from 'react';
import Images from '../Images';
import MemoryGame from './App.style';



class App extends Component {
  constructor() {
    super();
    this.state = {
      level: 5
    };
  }

  render() {
    let { level } = this.state;
    return (
      <MemoryGame>
        <Images level={level} />
      </MemoryGame>
    );
  }
}

export default App;
