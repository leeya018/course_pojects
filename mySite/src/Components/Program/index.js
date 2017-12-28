import React, { Component } from 'react';
import './Program.css';
import progData from './programsData.js';
export default ({ match }) => {
  console.log(progData[match.params.name].crew);
  let key = 0;

  let prog = progData[match.params.name];
  return (
    <div className="program">
      {<img src={prog.srcGif} alt="" />}
      <h2>{prog.title}</h2>
      <hr />
      <a href={prog.ref}>go to site</a>
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
};
