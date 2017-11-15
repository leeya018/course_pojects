import React, { Component } from 'react';
import shuffle from 'shuffle-array';
import Image from '../Image';
import Grid from './Images.styled';

const defaultSrc = 'http://myfirstchat.com/bookcity2/covers9/f9e6f8d44613a684b901c11274dd4a4648037942.jpg';
const dataLoader = {
  1: 2,
  2: 3,
  3: 8,
  4: 10,
  5: 15
};

class Images extends Component {
  constructor(props) {
    super(props);
    this.state = { images: [], openCards: 0, card1: null };
    this.checkGame = this.checkGame.bind(this);
  }

  componentDidMount() {
    this.createData();
  }
  checkGame(card) {
    let { card1, card2 } = this.state;
    if (!card1) {
      this.setState({ card1: card });
    } else {
      this.checkMatch(card1,card);
    }
  }

  checkMatch(card1,card2) {
    if (card1 && card2) {
      if (card1.src !== card2.src) {
        this.closeBothCards(card1, card2);
      } else {
        this.props.increasePoints();
      }
      this.setState({ card1: null});
    }
  }

  closeBothCards(card1, card2) {
    setTimeout(() => {
      card1.src = defaultSrc;
      card2.src = defaultSrc;
    }, 1000);
  }

  createData() {
    let { openCards } = this.state;
    let { level, category, data } = this.props;
    shuffle(data);
    data = data.splice(0, dataLoader[level]);
    let dupData = [...data, ...data];
    shuffle(dupData);
    let images = dupData.map((image, index) => (
      <Image key={index} imageUrl={image.src} openCards={openCards} checkGame={this.checkGame} />
    ));
    this.setState({ images });
  }

  render() {
    let { level } = this.props;
    let { images } = this.state;
    return <Grid level={level}>{images}</Grid>;
  }
}

export default Images;
