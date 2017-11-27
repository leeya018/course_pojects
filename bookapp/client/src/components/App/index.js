import React, { Component } from 'react';
import Books from '../Books';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyDialog from '../MyDialog';
import FlatButton from 'material-ui/FlatButton';

import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = { books: [], dialog: false };
    this.removeBook = this.removeBook.bind(this);
    this.openDialog = this.openDialog.bind(this);
    this.updateDialog = this.updateDialog.bind(this);
    this.addBook = this.addBook.bind(this);
  }
  componentDidMount() {
    this.getBooks();
  }
  getBooks() {
    let self = this;
    api.getData().then(books => {
      self.setState({ books });
    });
  }
  addBook(book) {
    let self = this;
    api.addBook(book).then(() => {
      self.getBooks();
    });
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

  render() {
    let { books, dialog } = this.state;
    return (
      <MuiThemeProvider>
        <FlatButton label="Add" primary={true} keyboardFocused={true} onClick={this.openDialog} />
        <MyDialog
          clName={'App'}
          titleDialog={'Add Book'}
          buttonTxt={'Add'}
          dialog={dialog}
          addBook={this.addBook}
          updateDialog={this.updateDialog}
        />
        <Books books={books} removeBook={this.removeBook} />
      </MuiThemeProvider>
    );
  }
}

export default App;
