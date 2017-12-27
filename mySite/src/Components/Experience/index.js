import React, { Component } from 'react';
import './Experience.css';
class Experience extends Component {
  render() {
    return (
      <div className="experience">
        <div>
          <h3>2017</h3>
          <div>
            restaurant web app which include 4 months of work in Agile methodologies and include 10 developers team
          </div>
        </div>
        <div>
          <h3>2015-2017</h3>
          <div>
            <h3>Mobile developer - Amdocs LTD.</h3>
            <h3>The projects included:</h3>
            <ul>
              <li> Bell Canada- BackEnd development: WebServices/ADTs/Wsdls</li>
              <li> Singtel\Optus - FrontEnd development: Widgets (JavaScript, Bootstrap, UXF framework)</li>
              <li> USCC- FrontEnd development: HTML5, CSS3, JavaScript. </li>
              <li> Optus RIM- Full Stack development: Widgets (JavaScript, UXF framework) + RESTfull web services</li>
            </ul>
          </div>
        </div>
        <div>
          <h3>2012-2015</h3>
          <div> Students programming mentor- Academic college SCE.</div>
        </div>
      </div>
    );
  }
}

export default Experience;
