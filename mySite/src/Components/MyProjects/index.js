import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import progData from '../Program/programsData.js';
import './MyProjects.css';

const afterBirth = 'afterBirth';
const crossfit = 'crossfit';

class myProjects extends Component {
  state = { src: progData['battleShip'].srcImg };

  showGif = () => {
    this.setState({ src: progData['battleShip'].srcGif });
  };

  showImg = () => {
    this.setState({ src: progData['battleShip'].srcImg });
  };

  render() {
    let { src } = this.state;
    return (
      <div className="myProjects">
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={src} onMouseOver={this.showGif} onMouseOut={this.showImg} alt="" />
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת המשכב לאחר לידה כדי לה</p>
        </div>
        {/* <div>
          <Link to={`program/${crossfit}`}>
            <img src={progData[crossfit].src} alt=""/>
          </Link>
          <h2>קרוספיט</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>

            <img src={progData[afterBirth].src} alt=""/>
          </Link>

          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
          <Link to={`program/${afterBirth}`}>
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div> */}
      </div>
    );
  }
}

export default myProjects;
