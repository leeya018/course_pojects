import React, { Component } from "react";
import api from "./api";
import Book from "../Book";
import SortBooks from "../SortBooks";
import BookPreview from "../BookPreview";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.getBooks();
    this.state = { books: [], myBooks: [] };
    this.removeBook = this.removeBook.bind(this);
    this.addToMyBooks = this.addToMyBooks.bind(this);
    this.updateMyBooks = this.updateMyBooks.bind(this);
    
    
  }
  addToMyBooks(bookToAdd) {
    let { myBooks } = this.state;
    myBooks.push(bookToAdd);
    this.setState({ myBooks });
  }
  removeBook(bookToDel) {
    let myBooks = this.state.myBooks.filter(book => book !== bookToDel);
    this.setState({ myBooks });
  }
  updateMyBooks(myBooks) {
    this.setState({ myBooks });
  }

  getBooks() {
    api.getBooks().then(data => {
      // let books  =data['books']
      let books  =data
      
      // this.setState({ books,myBooks:books });
      this.setState({ books }); 
    });
  }
  render() {
    let { books, myBooks } = this.state;
    let bookPreview = myBooks.map((book, index) => (
      <BookPreview
        key={index}
        removeBook={this.removeBook}
        book={book}
        addToMyBooks={this.addToMyBooks}
      />
    ));
    return (
      <div className="appContainer">
        <div className="appSubContainer">
          {books.length > 0 && (
            <Book
              className="bookItem"
              books={books}
              myBooks={myBooks}
              addToMyBooks={this.addToMyBooks}
              removeBook={this.removeBook}
            />
          )}
          <div className="sortWithPreview">
            <SortBooks myBooks={myBooks} updateMyBooks={this.updateMyBooks} />          
            <div className="previewItem">{bookPreview}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
