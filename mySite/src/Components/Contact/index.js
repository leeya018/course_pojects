import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Contact.css';
class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <a href="https://www.facebook.com/lee.yahav" />
        <a href="https://www.linkedin.com/in/lee-yahav-45742073/" />
        <a href="https://github.com/leeya018/course_pojects" />
      </div>
    );
  }
}

export default Contact;
