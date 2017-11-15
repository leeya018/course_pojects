import React, { Component } from 'react';
import Images from '../Images';
import User from '../User';
import api from './api';
import { MemoryGame, Game } from './App.style';
import { Select } from 'antd';
import 'antd/lib/select/style/css';
import Menu from '../Menu';
const Option = Select.Option;

class App extends Component {
  constructor() {
    super();
    this.state = {
      level: 1,
      points: 0,
      category: 'animalls',
      showGame: 'none',
      showMenu: 'block',
      data: []
    };
    this.increasePoints = this.increasePoints.bind(this);
    this.updateGame = this.updateGame.bind(this);
  }

  increasePoints() {
    let { points } = this.state;
    points++;
    this.setState({ points });
  }

  updateGame(level, category) {
    api.getData(category).then(data => {
      this.setState({ data, level, category, showGame: 'block', showMenu: 'none' });
    });
  }
  render() {
    let { level, points, showGame, showMenu, category, data } = this.state;
    return (
      <MemoryGame>
        {<Menu showMenu={showMenu} level={level} category={category} updateGame={this.updateGame} />}
        {data.length > 0 && (
          <Game showGame={showGame}>
            <User points={points} />
            <Images increasePoints={this.increasePoints} data={data} level={level} category={category} />
          </Game>
        )}
      </MemoryGame>
    );
  }
}

export default App;
