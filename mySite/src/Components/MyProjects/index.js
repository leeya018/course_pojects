import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectItem from './ProjectItem'
import './MyProjects.css';

  
class myProjects extends Component {
  


  render() {
    return (
      <div className="myProjects">
        <ProjectItem itemName={"battleShip"}></ProjectItem>
        <ProjectItem itemName={"bnb"}></ProjectItem>
        <ProjectItem itemName={"bookapp"}></ProjectItem>
        <ProjectItem itemName={"hireMe"}></ProjectItem>
        <ProjectItem itemName={"imdb"}></ProjectItem>
        <ProjectItem itemName={"memoryGame"}></ProjectItem>
        {<ProjectItem itemName={"muncher"}></ProjectItem> }

        
        
      </div>
    );
  }
}

export default myProjects;
