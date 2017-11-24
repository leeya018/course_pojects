import React, { Component } from 'react';
import { TimerContainer } from './Timer.style';

class Timer extends Component {
  constructor(props) {
    super(props);
  }

  startTimer() {
    let seconds = 0;
    let minutes = 0;
    this.intervalId = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        this.props.updateMinutes(minutes);
      }
      this.props.updateSeconds(seconds);
    }, 1000);
  }
  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  componentWillReceiveProps(nextProps) {
    let { seconds, minutes } = this.props;
    if (nextProps.seconds === 0) {
      clearInterval(this.intervalId);
      this.startTimer();
    }
    if (nextProps.stopTimer === true) {
      clearInterval(this.intervalId);
      this.props.updateMinutes(minutes);
      this.props.updateSeconds(seconds);
      this.props.updateStopTime(false);
    }
  }

  render() {
    let { seconds, minutes } = this.props;
    return (
      <TimerContainer>
        Timer:{minutes}:{seconds}
      </TimerContainer>
    );
  }
}

export default Timer;
