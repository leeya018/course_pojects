import React, { Component } from 'react';
import BookList from '../BookList';
import api from './api.js';
import './App.css';

class App extends Component {
  state = {
    books: [],
    name: '',
    publishDate: ''
  };
  componentDidMount() {
    api.getBooks().then(res => {
      this.setState({ books: res.data });
    });
  }

  updateData = ({ target }) => {
    let { name, value } = target;
    this.setState({ [name]: value });
  };
  addBook = () => {
    debugger;
    let { name, publishDate } = this.state;
    let book = { name: name, publishDate: publishDate };
    api.addBook(book)
      .then(() => {
        alert('book added');
      })
      .catch(() => {
        alert('err');
      });
  };
  render() {
    let { books } = this.state;
    return (
      <div className="App">
        <h1>add book</h1>
        <p>
          name: <input type="text" name="name" onChange={this.updateData} />
        </p>
        <p>
          name: <input type="text" name="publishDate" onChange={this.updateData} />
        </p>
        <button onClick={this.addBook}>add movie</button>

        {books.length > 0 && <BookList books={books} />}
      </div>
    );
  }
}

export default App;
