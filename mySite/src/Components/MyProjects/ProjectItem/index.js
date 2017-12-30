import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import progData from '../../Program/programsData.js';
import './ProjectItem.css';


class ProjectItem extends Component {
  constructor(props){
    super(props)
    let {itemName} = props
    this.state = { src:progData[itemName].srcImg };


    
  }

  
  showGif = () => {
    let {itemName}=this.props
    this.setState({ src: progData[itemName].srcGif });
  };

  showImg = () => {
    let {itemName}=this.props
    
    this.setState({ src: progData[itemName].srcImg });
  };

  render() {
    let { src } = this.state;
    let {itemName}=this.props
    
    return (
        <div>
          <Link to={`program/${itemName}`}>
            {/* <img src={src}  alt="" /> */}
            {<img src={src} onMouseOver={this.showGif} onMouseOut={this.showImg} alt="" />}
            
          </Link>
          <h2>{progData[itemName].title}</h2>
        </div>
    );
  }
}

export default ProjectItem;
