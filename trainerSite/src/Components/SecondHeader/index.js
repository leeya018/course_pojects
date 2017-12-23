import React, {Component} from 'react';
import IphoneNav from '../Links/IphoneNav'
import './SecondHeader.css';

class SecondHeader extends Component {

getRedBox=()=>{
  let box1 = <div><div>Seed</div><div>Personal straining</div></div>
  let box2 = <div>Seed - Personal straining</div>
  
  return (window.innerWidth >769)?box1:box2;
}
  render() {
    return (
        <div className="secondHeader">
          <IphoneNav />          
          <div className="mailData">
            <div>רוני יהב - מאמנת כושר אישית</div>
            <div>
              <i className="redBox fa fa-envelope-o fa-2x" aria-hidden="true"></i>
            </div>
          </div>
           <div className="redBox">
              {this.getRedBox()}
          </div>
      </div>

    );
  }
}

export default SecondHeader;
