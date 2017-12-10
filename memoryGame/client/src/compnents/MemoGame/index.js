import 'antd/lib/button/style/css';
import { Link } from 'react-router-dom';
import api from '../App/api';
import { Button } from 'antd';
import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Image from '../Image';
import Timer from '../Timer';
import User from '../User';
import MyModal from '../MyModal';
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
    debugger
    this.state = {
      score: 0,
      currLevel: props.match.params.level,
      images: [],
      openCards: 0,
      card1: null,
      stopTimer: false,
      seconds: 0,
      minutes: 0,
      newRecordModal: false,
      modalTxt: '',
      modalTitle: 'bla'
    };
    this.increaseScore = this.increaseScore.bind(this);
    this.navigateHome = this.navigateHome.bind(this);
    this.nextLevel = this.nextLevel.bind(this);
    this.checkGame = this.checkGame.bind(this);
    this.updateStopTime = this.updateStopTime.bind(this);
    this.updateSeconds = this.updateSeconds.bind(this);
    this.updateMinutes = this.updateMinutes.bind(this);
    this.updateNewRecordModal = this.updateNewRecordModal.bind(this);
  }
  sendScoreAndTime(name, level, category, score, time,countryCode) {
    let self = this;
    api.sendMyResult(name, level, category, score, time,countryCode).then(response => {
      if (Object.keys(response.data).length !== 0) {
        let modalTxt = JSON.stringify(response.data);
        self.setState({ newRecordModal: true, modalTxt, modalTitle: 'New Record' });
      } else {
        let timeTxt = `Your time is: ${JSON.stringify(time)}`;
        self.setState({ newRecordModal: true, modalTxt: timeTxt, modalTitle: 'Your Time' });
      }
    });
  }

  updateNewRecordModal(newRecordModal) {
    this.setState({ newRecordModal });
  }

  updateMinutes(minutes) {
    this.setState({ minutes });
  }
  updateSeconds(seconds) {
    this.setState({ seconds });
  }

  componentDidMount() {
    let { currLevel } = this.state;
    this.updateImages(currLevel);
  }

  increaseScore() {
    let {currLevel, score, seconds, minutes } = this.state;
    let { name, category,countryCode } = this.props;
    let time = { minutes, seconds };
    score++;
    debugger
    if (score === dataLoader[currLevel]) {
      this.sendScoreAndTime(name, currLevel, category, score, time,countryCode);
      this.setState({ stopTimer: true });
    }
    this.setState({ score });
  }

  navigateHome() {
    this.props.history.push('/');
  }

  nextLevel() {
    let { currLevel } = this.state;
    currLevel++;
    this.updateImages(currLevel);
    this.setState({ minutes: 0, seconds: 0, score: 0, stopTimer: false });
  }

  updateImages(currLevel) {
    let { openCards } = this.state;
    let { category } = this.props;
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
        this.increaseScore();
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
  updateStopTime(stopTimer) {
    this.setState({ stopTimer });
  }

  render() {
    let { score, currLevel, images, stopTimer, seconds, minutes, newRecordModal, modalTxt, modalTitle } = this.state;
    let { category } = this.props;
    return (
      <MemoryGame>
        <MyModal
          newRecordModal={newRecordModal}
          updateNewRecordModal={this.updateNewRecordModal}
          modalTxt={modalTxt}
          modalTitle={modalTitle}
        />
        <Game>
          <User score={score} />
          <GridContainer>
            <Grid level={currLevel}>{images}</Grid>;
          </GridContainer>
          <Right>
            <Timer
              stopTimer={stopTimer}
              updateStopTime={this.updateStopTime}
              seconds={seconds}
              minutes={minutes}
              updateSeconds={this.updateSeconds}
              updateMinutes={this.updateMinutes}
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
              <Link to="/records">
                <Button style={{ width: '100%' }} type="primary">
                  Records
                </Button>
              </Link>
            </Buttons>
          </Right>
        </Game>
      </MemoryGame>
    );
  }
}

export default MemoGame;
