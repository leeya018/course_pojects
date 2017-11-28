import React, { Component } from 'react';
import Books from '../Books';
import Filter from '../Filter';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import api from './api';

class App extends Component {
  constructor() {
    super();
    this.state = { books: [], filteredBooks: [] };

    this.updateBooks1 = this.updateBooks1.bind(this);
  }
  componentDidMount() {
    this.getBooks();
  }
  getBooks() {
    let self = this;
    api.getData().then(books => {
      self.setState({ books, filteredBooks: books });
    });
  }
  // updateBooks(books) {
  //   this.setState({ filteredBooks:books });
  // }

  updateBooks1(books) {
    this.setState({ filteredBooks: books });
  }

  render() {
    let { books, filteredBooks } = this.state;
    return (
      <MuiThemeProvider>
        <div>
          {books.length > 0 && (
            <div>
              <Filter books={books} updateBooks={this.updateBooks1} />
              <Books books={filteredBooks} removeBook={this.removeBook} />
            </div>
          )}
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
