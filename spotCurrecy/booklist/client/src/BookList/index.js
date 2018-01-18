import React, { Component } from 'react';
import Book from '../Book';
import './BookList.css';


export default ({books})=>{
  return (
    <div>
      {books.map((book)=><Book  book={book} />)}
    </div>
  )
}