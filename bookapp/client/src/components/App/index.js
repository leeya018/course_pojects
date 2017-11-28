import React, { Component } from 'react';
import Books from '../Books';
import Filter from '../Filter';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = { books: undefined, filteredBooks: [] };
    this.updateFilteredBooks = this.updateFilteredBooks.bind(this);
    this.removeBook = this.removeBook.bind(this);
    this.updateBook = this.updateBook.bind(this);
    this.addBook = this.addBook.bind(this);
  }
  componentDidMount() {
    let self = this;
    api.getData().then(books => {
      self.setState({ books, filteredBooks: books });
    });
  }

  updateFilteredBooks(books) {
    this.setState({ filteredBooks: books });
  }
  removeBook(id) {
    let books = this.state.books.filter(book => book.id !== id);
    this.setState({ filteredBooks: books });
  }

  updateBook(bookToEdit) {
    let books = this.state.books.map(book => {
      return book.id === bookToEdit.id ? bookToEdit : book;
    });
    this.setState({ filteredBooks: books });
  }

  addBook(bookToAdd) {
    let { books } = this.state;
    let idForBook = books[books.length - 1].id++;
    bookToAdd.id = idForBook;
    books.push(bookToAdd);
    this.setState({ filteredBooks: books });
  }

  render() {
    let { books, filteredBooks } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {books !== undefined && (
            <div>
              <Filter books={books} updateFilteredBooks={this.updateFilteredBooks} />
              <Books
                books={filteredBooks}
                addBook={this.addBook}
                updateBook={this.updateBook}
                removeBook={this.removeBook}
              />
            </div>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
