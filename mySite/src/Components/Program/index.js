import React, {Component} from 'react';
import './Program.css'
import progData from './programsData.js'
export default ({match})=> {
  console.log(progData[match.params.name])
  debugger
  let prog  =progData[match.params.name]
    return (
      <div className="program">
        <img src={prog.srcImg} alt=""/>
        <h2>{prog.title1}</h2>
        <hr/>
        <h1>{prog.title2}</h1>
        <p>{prog.par1}</p>
        <h3>{prog.title1}</h3>
        <p>{prog.par3}</p>
        <h1>תתקשרי עוד היום 054-2226958</h1>
      </div>

    );
}

