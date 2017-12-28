import React, { Component } from 'react';
import './Program.css';
import progData from './programsData.js';

let key = 0;

class Program extends Component {
  constructor(props) {
    super(props);
    let prog = progData[props.match.params.name];
    debugger;
    this.state = { url: prog.srcImg };
  }

  render() {
    let { url } = this.state;
    let { match } = this.props;
    let prog = progData[match.params.name];
    return (
      <div className="program">
        <img src="img/bnb.gif" alt="" />
        <h2>{prog.title}</h2>
        <hr />
        <a href={prog.ref} target="_blank">
          go to site
        </a>
        <p>{prog.description}</p>
        <h3>Technologies : </h3>
        <ul>{prog.technolgies.map(tech => <li key={key++}>{tech}</li>)}</ul>

        {match.params.name === 'muncher' && (
          <div>
            <h3>Crew : </h3>
            <ul>{prog.crew.map(man => <li key={key++}>{man}</li>)}</ul>
          </div>
        )}
      </div>
    );
  }

  // console.log(progData[match.params.name].crew);
  // );
}

export default Program;
