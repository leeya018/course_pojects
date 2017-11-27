import {List} from 'material-ui/List';

import React, { Component } from 'react';
import Book from '../Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {books:[]}
    this.removeBook=this.removeBook.bind(this)
    
  }

  removeBook(id){
    this.props.removeBook(id)
  }
  createBooks() {
    return this.props.books.map((book, index) => <Book removeBook={this.removeBook} book={book} key={index} />);
  }
  render() {
    let books = this.createBooks();
    return <List>{books}</List>;
  }
}

export default Books;
