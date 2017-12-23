import React, {Component} from 'react';
import Links from './Links';
import MenuNav from './MenuNav';

 
export default ()=>{
  function getData(){
    return <Links/> 
  }
  return(
    <div>{ getData() }</div>
    
  )

}
 
  