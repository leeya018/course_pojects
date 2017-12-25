import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import progData from '../Program/programsData.js'
import './PracticeProgram.css'

const afterBirth="afterBirth"
const crossfit="crossfit"


class PracticeProgram extends Component {

  render() {
    return (
      <div className="PracticeProgram">
        <div>
          <Link to={`program/${afterBirth}`} >
            <img src={progData[afterBirth].src} alt=""/>
          </Link>
          <h2>אימון כושר אחרי לידה</h2>
          <p>אימוני כושר לחיזוק וחיטוב הגוף לנשים אחרי לידה. נשים רבות מחכות שתסתיים תקופת
            המשכב לאחר לידה כדי לה</p>
        </div>
        <div>
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
        </div>

      </div>

    );
  }
}

export default PracticeProgram;
