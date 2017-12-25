import React, {Component} from 'react';
import Links from './Links';

 
export default ()=>{
  function getData(){
    return <Links/> 
  }
  return(
    <div>{ getData() }</div>
    
  )

}
 
  