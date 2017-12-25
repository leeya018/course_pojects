import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Contact.css'
class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <h1>פרטי התקשרות</h1>
        <a href="https://www.facebook.com/roni.yahav.3"></a>
        {/* <a href="https://mail.google.com/mail/u/0/#inbox/1603c00a065ce85a?compose=new"></a> */}
        <Link to={`email`}>
          <div></div>
        </Link>

      </div>

    );
  }
}

export default Contact;
