import React, {Component} from 'react';
import Links from './Links';
import MenuNav from './MenuNav';

 
export default ()=>{
  function getData(){
    // return (window.innerWidth >500 )?<Links />:<MenuNav/> 
    return <Links/> 
  }
  return(
    <div>{ getData() }</div>
    
  )

}
 
  