import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Main from '../Main';
import About from '../About';
import './Links.css';


const about = "about"
const experience = "experience"
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
          <div>none</div>
        </Link>
        <Link to={this.updateUrl(about)} >
          <div>about</div>
        </Link>
        <Link to={this.updateUrl(experience)} >
          <div>my experience</div>
        </Link>
        <Link to={this.updateUrl(forwho)} >
          <div>what I love</div>
        </Link>
        <Link to={this.updateUrl(practiceProgram)}>
          <div>my projects</div>
        </Link>
        <Link to={this.updateUrl(tips)} >
          <div>none</div>
        </Link>
        <Link to={this.updateUrl(contact)} >
          <div>contact</div>
        </Link>
      </div>

    );
  }
}

export default Links;