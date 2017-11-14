import React, { Component } from 'react';
import Images from '../Images';
import User from '../User';
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
      showMenu: 'block'
    };
    this.inceasePoints = this.inceasePoints.bind(this);
    this.updateLevel = this.updateLevel.bind(this);
    this.updateCategory = this.updateCategory.bind(this);
  }

  inceasePoints() {
    let { points } = this.state;
    points++;
    this.setState({ points });
  }
  updateLevel(level) {
    this.setState({ level, showGame: 'block', showMenu: 'none' });
  }
  updateCategory(category) {
    this.setState({ category });
  }

  render() {
    let { level, points, showGame, showMenu, category } = this.state;
    return (
      <MemoryGame>
        <Menu showMenu={showMenu} updateLevel={this.updateLevel} updateCategory={this.updateCategory}/>
        <Game showGame={showGame}>
          <User points={points} />
          <Images inceasePoints={this.inceasePoints} level={level} category={category} />
        </Game>
      </MemoryGame>
    );
  }
}

export default App;
{
}
