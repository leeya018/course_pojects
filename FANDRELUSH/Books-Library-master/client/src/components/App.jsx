import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { booksRequest } from '../redux/actions/book';
import Menu from './Menu';
import Book from './Book';
import Modals from './ErrorMessage';

const BooksWrapper = styled.div`
  margin: 0 auto;
  justify-content: center;
  width: 1380px;
  display: grid;
  grid-template-columns: 0fr 0fr 0fr 0fr;
  grid-gap: 40px;
  background: #222325;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

class App extends Component {
  componentWillMount = () => this.props.dispatch(booksRequest('http://localhost:4000/books'));
  
  render() {
    const { books } = this.props;
    return books ? (
      books.length > 1 && (
        <div>
          <Menu />
          <BooksWrapper>{books.map(book => <Book key={book.id} book={book} />)}</BooksWrapper>
          <Modals />
        </div>
      )
    ) : (
      <div>loading</div>
    );
  }
}

const mapStateToProps = state => state.books;

export default connect(mapStateToProps)(App);
