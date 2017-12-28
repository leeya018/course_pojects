import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main';
import About from '../About';
import './Links.css';

const about = 'about';
const experience = 'experience';
const education = 'education';
const myProjects = 'myProjects';
const tips = 'tips';
const contact = 'contact';

class Links extends Component {
  constructor(props) {
    super(props);
    this.updateUrl = this.updateUrl.bind(this);
    this.state = {
      url: ''
    };
  }

  updateUrl(path) {
    window.scrollTo(0, 0);
    let url = window.location.href;
    url = url.slice(21, url.length);
    if (url.split('/').length - 1 > 1) {
      url = `../${path}`;
    } else {
      url = path;
    }
    return url;
  }
  render() {
    let { url } = this.state;
    return (
      // <div className="linksConainter">
        <div className="links">
          <Link to={''}>
            <div>About Me</div>
          </Link>
          <Link to={this.updateUrl(experience)}>
            <div>My Experience</div>
          </Link>
          <Link to={this.updateUrl(education)}>
            <div>My Education</div>
          </Link>
          <Link to={this.updateUrl(myProjects)}>
            <div>my Projects</div>
          </Link>
          {/* <Link to={this.updateUrl(tips)} >
          <div>none</div>
        </Link> */}
          <Link to={this.updateUrl(contact)}>
            <div>Contact</div>
          </Link>
        </div>
      // </div>
    );
  }
}

export default Links;
