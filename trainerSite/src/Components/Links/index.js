import React, {Component} from 'react';
import { Link } from 'react-router-dom';


import Main from '../Main';
import About from '../About';

import './Links.css';

class Links extends Component {

  render() {
    return (
      <div className="links">
        <Link to={`main`}>
          <div>About</div>

        </Link>
        <Link to={`about`}>
          <div>Main</div>

        </Link>
      </div>

    );
  }
}

export default Links;