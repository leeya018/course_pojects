import React, {Component} from 'react';
import './SecondHeader.css';

class SecondHeader extends Component {
  lee() {
    let a = 43432
    console.log("dsa")
  }
  render() {
    return (
      <div className="secondHeaderContainer">
        <div className="secondHeader">
          <div>
            <div>רוני יהב - מאמנת כושר אישית</div>
            <div>
              <i className="fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
          <div>
            <div>
              <div>Seed</div>
              <div>Personal straining</div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default SecondHeader;
