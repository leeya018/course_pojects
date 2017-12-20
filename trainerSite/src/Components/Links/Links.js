import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main';
import About from '../About';
import MenuNav from './MenuNav'
import './Links.css';


const about = "about"
const whywe = "whywe"
const forwho = "forwho"
const practiceProgram = "practiceProgram"
const tips = "tips"
const  contact = "contact"

class Links extends Component {
  constructor(props){
    super(props)
    this.updateUrl=this.updateUrl.bind(this)
    this.state ={
      url:""
    }
  }

  updateUrl(path){
    window.scrollTo(0, 0);
    let url  = window.location.href
    url = url.slice(21,url.length)
    if((url.split('/').length-1 )> 1){
      url=`../${path}`
    }else{
      url=path
    }
   return url
  }
  render() {
    let {url} = this.state
    return (
      <div className="links">
        <Link to={""} >
          <div>ראשי</div>
        </Link>
        <Link to={this.updateUrl(about)} >
          <div>אודות</div>
        </Link>
        <Link to={this.updateUrl(whywe)} >
          <div>למה אנחנו</div>
        </Link>
        <Link to={this.updateUrl(forwho)} >
          <div>למי זה מתאים</div>
        </Link>
        <Link to={this.updateUrl(practiceProgram)}>
          <div>תוכנית אימונים</div>
        </Link>
        <Link to={this.updateUrl(tips)} >
          <div>טיפים</div>
        </Link>
        <Link to={this.updateUrl(contact)} >
          <div>צור קשר</div>
        </Link>
      </div>

    );
  }
}

export default Links;