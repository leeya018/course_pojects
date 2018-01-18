import React, { Component } from 'react';
import './Book.css';


export default ({book})=>{
  return (
    <div>
      <h1>{book.name}</h1>
      <p>{book.publishDate}</p>
    </div>
  )
}