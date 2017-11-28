import { List } from 'material-ui/List';
import MyDialog from '../MyDialog';
import FlatButton from 'material-ui/FlatButton';
import React, { Component } from 'react';
import Book from '../Book';

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = { books: props.books, dialog: false };
    this.removeBook = this.removeBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.addBook = this.addBook.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.updateDialog = this.updateDialog.bind(this);
  }
  addBook(book) {
    let { books } = this.state;
    books.push(book);
    this.setState({ books });
  }
  updateDialog(dialog) {
    this.setState({ dialog });
  }

  openDialog() {
    this.setState({ dialog: true });
  }
  removeBook(id) {
    let books = this.state.books.filter(book => book.id !== id);
    this.setState({ books });
  }

  updateBook(bookToEdit) {
    let books = this.state.books.map(book => {
      return book.id === bookToEdit.id ? bookToEdit : book;
    });
    debugger;
    
    this.setState({ books });
  }

  addBook(bookToAdd) {
    let { books } = this.state;
    let idForBook = books[books.length - 1].id++;
    bookToAdd.id = idForBook;
    books.push(bookToAdd);
    this.setState({ books });
  }
  createBooks() {
    return this.state.books.map((book, index) => (
      <Book updateBook={this.updateBook} removeBook={this.removeBook} addBook={this.addBook} book={book} key={index} />
    ));
  }
  render() {
    let books = this.createBooks();
    let { dialog } = this.state;
    return (
      <div>
        <FlatButton label="Add" primary={true} keyboardFocused={true} onClick={this.openDialog} />
        <MyDialog
          clName={'App'}
          titleDialog={'Add Book'}
          buttonTxt={'Add'}
          dialog={dialog}
          addBook={this.addBook}
          updateDialog={this.updateDialog}
        />
        <List>{books}</List>;
      </div>
    );
  }
}

export default Books;

// removeBook(idToDel) {
//   let books = this.state.books.map(book => {
//     if (book.id !== idToDel) {
//       return book;
//     }
//   });
// }
