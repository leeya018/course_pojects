import 'antd/lib/select/style/css';
import React, { Component } from 'react';
import Images from '../Images';
import User from '../User';
import { MemoryGame, Game } from './MemoGame.style';

class MemoGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0
    };
    this.increasePoints = this.increasePoints.bind(this);
  }

  increasePoints() {
    let { points } = this.state;
    points++;
    this.setState({ points });
  }

  render() {
    let { points } = this.state;
    let { data, level, category } = this.props;
    debugger;
    return (
      <MemoryGame>
        {data.length > 0 && (
          <Game>
            <User points={points} />
            <Images increasePoints={this.increasePoints} data={data} level={level} category={category} />
          </Game>
        )}
      </MemoryGame>
    );
  }
}

export default MemoGame;

