import 'antd/lib/button/style/css';
import { Button } from 'antd';
import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Image from '../Image';
import Timer from '../Timer';
import User from '../User';
import { Buttons, MemoryGame, Game, Grid, GridContainer, Right } from './MemoGame.style';
import db from './db.json';

const dataLoader = {
  1: 2,
  2: 3,
  3: 8,
  4: 10,
  5: 15
};
const defaultSrc = 'http://myfirstchat.com/bookcity2/covers9/f9e6f8d44613a684b901c11274dd4a4648037942.jpg';

class MemoGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 0,
      currLevel: props.level,
      images: [],
      openCards: 0,
      card1: null,
      stopTimer: false,
      resetTimer: false
    };
    this.increasePoints = this.increasePoints.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.checkGame = this.checkGame.bind(this);
    this.updateStopTime = this.updateStopTime.bind(this);
    this.updateResetTime = this.updateResetTime.bind(this);
  }

  componentWillMount() {
    let { currLevel } = this.state;
    this.updateImages(currLevel);
  }

  increasePoints() {
    let { points } = this.state;
    let { level } = this.props;
    points++;
    if (points === dataLoader[level]) {
      this.setState({ points: 0, stopTimer: true });
    } else {
      this.setState({ points });
    }
  }

  navigateHome() {
    this.props.history.push('/');
  }

  nextLevel() {
    let { currLevel } = this.state;
    currLevel++;
    this.updateImages(currLevel);
    this.setState({ resetTimer: true });
  }

  updateImages(currLevel) {
    let { openCards } = this.state;
    let { category } = this.props;
    debugger
    let data = Object.assign([], db[category]);
    shuffle(data);
    data = data.splice(0, dataLoader[currLevel]);
    let dupData = [...data, ...data];
    shuffle(dupData);
    let images = dupData.map((image, index) => <Image key={index} imageUrl={image.src} checkGame={this.checkGame} />);
    this.setState({ images, currLevel });
  }
  checkGame(card) {
    let { card1, card2 } = this.state;
    if (!card1) {
      this.setState({ card1: card });
    } else {
      this.checkMatch(card1, card);
    }
  }

  checkMatch(card1, card2) {
    if (card1 && card2) {
      if (card1.src !== card2.src) {
        this.closeBothCards(card1, card2);
      } else {
        this.increasePoints();
      }
      this.setState({ card1: null });
    }
  }

  closeBothCards(card1, card2) {
    setTimeout(() => {
      card1.src = defaultSrc;
      card2.src = defaultSrc;
    }, 1000);
  }
  updateStopTime() {
    this.setState({ stopTimer: false });
  }

  updateResetTime() {
    this.setState({ resetTimer: false });
  }

  render() {
    let { points, currLevel, images, stopTimer, resetTimer } = this.state;
    let { category } = this.props;
    return (
      <MemoryGame>
        <Game>
          <User points={points} />
          <GridContainer>
            <Grid level={currLevel}>{images}</Grid>;
          </GridContainer>
          <Right>
            <Timer
              stopTimer={stopTimer}
              updateStopTime={this.updateStopTime}
              resetTimer={resetTimer}
              updateResetTime={this.updateResetTime}
            />
            <Buttons>
              <Button type="primary" onClick={this.navigateHome}>
                Home
              </Button>
              {currLevel < 5 && (
                <Button type="primary" onClick={this.nextLevel}>
                  Next Level
                </Button>
              )}
            </Buttons>
          </Right>
        </Game>
      </MemoryGame>
    );
  }
}

export default MemoGame;
