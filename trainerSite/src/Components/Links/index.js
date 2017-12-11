import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import Main from '../Main';
import About from '../About';

import './Links.css';

class Links extends Component {

  render() {
    return (
      <div className="links">
        <Link to={``}>
          <div>ראשי</div>
        </Link>
        <Link to={`about`}>
          <div>אודות</div>
        </Link>
        <Link to={`whywe`}>
          <div>למה אנחנו</div>
        </Link>
        <Link to={`forwho`}>
          <div>למי זה מתאים</div>
        </Link>
        <Link to={`practiceProgram`}>
          <div>תוכנית אימונים</div>
        </Link>
        <Link to={`tips`}>
          <div>טיפים</div>
        </Link>
        <Link to={`contact`}>
          <div>צור קשר</div>
        </Link>
      </div>

    );
  }
}

export default Links;