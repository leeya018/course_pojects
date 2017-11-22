import React, { Component } from 'react';
import { TimerContainer } from './Timer.style';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      delay:1000
    };
  }
  componentDidMount() {
    let { delay,seconds, minutes } = this.state;
    setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }
    this.setState({delay, seconds, minutes });      
    }, delay);
  }

  stopTimerFunc(){
    this.setState({ seconds:0,minutes:0 });
    
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.stopTimer === true) {
    //   debugger
    //   this.stopTimerFunc()
    //   this.props.updateStopTime()
    // }
    // if (nextProps.resetTimer === true) {
    //   this.props.updateResetTime()
    //   debugger
    //   this.stopTimerFunc()
    // }
  }

  render() {
    let {delay, seconds, minutes } = this.state;
    console.log(delay)

    return (
      <TimerContainer>
        Timer:{minutes}:{seconds}
      </TimerContainer>
    );
  }
}

export default Timer;
