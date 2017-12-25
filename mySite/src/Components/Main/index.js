import React, {Component} from 'react';
import './Main.css';

import ImageCarusel from './ImageCarusel'
class Main extends Component {

  render() {
    return (
      <div className="main">
        {<ImageCarusel />}
      </div>

    );
  }
}

export default Main;
