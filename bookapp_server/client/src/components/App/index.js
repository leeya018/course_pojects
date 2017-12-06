import React, { Component } from 'react';
import Books from '../Books';
import Filter from '../Filter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import api from './api';
import { AppTitle, AppContainer, AppContent } from './App.style';
import AlertDialog from '../AlertDialog';

const title = 'My Book App';

class App extends Component {
  constructor() {
    super();
    this.state = { alertDialog: false, books: undefined, booksDup: [], filteredBooks: [] };
    this.updateFilteredBooks = this.updateFilteredBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.addBook = this.addBook.bind(this);
    this.updateDialog = this.updateDialog.bind(this);
    
    
  }
  componentDidMount() {
    let self = this;
    api.getData().then(books => {
      self.setState({ books, booksDup: books, filteredBooks: books });
    });
  }

  updateFilteredBooks(books) {
    this.setState({ filteredBooks: books });
  }
  removeBook(id) {
    let books = this.state.booksDup.filter(book => book.id !== id);
    this.setState({ booksDup: books, filteredBooks: books });
  }

  updateBook(bookToEdit) {
    let books = this.state.booksDup.map(book => {
      return book.id === bookToEdit.id ? bookToEdit : book;
    });
    this.setState({ booksDup: books, filteredBooks: books });
  }

  addBook(bookToAdd) {
    let { booksDup } = this.state;
    let found = booksDup.find(book => book.title === bookToAdd.title);
    if (!found) {
      let idForBook = booksDup[booksDup.length - 1].id + 1;
      bookToAdd.id = idForBook;
      booksDup.push(bookToAdd);
      this.setState({ booksDup, filteredBooks: booksDup });
    } else {
      this.setState({ alertDialog: true });
    }
  }
  updateDialog(alertDialog) {
    this.setState({ alertDialog });
  }

  
  render() {
    let { alertDialog,books, booksDup, filteredBooks } = this.state;
    return (
      <MuiThemeProvider>
        <AppContainer>
          <AlertDialog
            titleDialog={'Alert'}
            buttonTxt={'Ok'}
            textDialog={'Titles are the same'}
            alertDialog={alertDialog}
            updateDialog={this.updateDialog}
          />
          {books !== undefined && (
            <AppContent>
              <AppTitle>{title}</AppTitle>
              <Filter books={booksDup} updateFilteredBooks={this.updateFilteredBooks} />
              <Books
                books={filteredBooks}
                addBook={this.addBook}
                updateBook={this.updateBook}
                removeBook={this.removeBook}
              />
            </AppContent>
          )}
        </AppContainer>
      </MuiThemeProvider>
    );
  }
}

export default App;
