import React, { Component } from 'react';

import './About.css';
class About extends Component {
  state = { sound: new Audio('voice/heartbeat.mp3'), play: true };
  componentDidMount() {}
  startBits = () => {
    this.state.sound.play();
  };

  stopBits = () => {
    this.state.sound.pause();
  };

  render() {
    return (
      <div className="about">
        <div className="aboutContent">
          <div>
            <p>
              So,My name is Lee Yahav<br />and I am a Full Stack Developer, I love the programming stuff, its area which
              never make you bored.<br />
              each day there is a new technology,each day there is a new tool helper for you to learn. <br />
              after finish my army service , I knew just then what I want to do , and I steped into this world without
              knowing a dam thing about it. something like first sight
              <i
                className="fa fa-2x fa-heart"
                aria-hidden="true"
                onMouseOver={this.startBits}
                onMouseOut={this.stopBits}
              />
              <br />,something you cannot explain with words.
            </p>
          </div>

          <div />
        </div>
        <div className="army">
          <h3>Army Service</h3>
          <div>
            <h3>2006-2009</h3>
            <p>
              Air craft warrior and a medic, released rank- Staff Sergeant Received the aircraft detection excellence
              badge.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
