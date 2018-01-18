import axios from 'axios';

import { GET_BOOKS, EDIT_BOOK, ADD_BOOK, GET_BOOKS_SUCCESS, DELETE_BOOK, GET_BOOKS_FAILURE } from '../constants/books';

debugger;
export const getBooks = () => ({ type: GET_BOOKS });
export const editBook = (id, title, author, publishedDate) => ({
  type: EDIT_BOOK,
  payload: { id, title, author, publishedDate }
});
export const deleteBook = id => ({ type: DELETE_BOOK, payload: { id } });
export const addBook = book => ({ type: ADD_BOOK, payload: { book } });
export const getBooksSuccess = books => ({ type: GET_BOOKS_SUCCESS, payload: { books } });
export const getBooksFailure = error => ({
  type: GET_BOOKS_FAILURE,
  payload: { error }
});

export const booksRequest = (
  url = 'http://ec2-18-217-102-218.us-east-2.compute.amazonaws.com:4000/books'
) => async dispatch => {
  dispatch(getBooks);

  try {
    const res = await axios.get(url);
    dispatch(getBooksSuccess(res.data[0].items));
  } catch (error) {
    dispatch(getBooksFailure(error));
  }
};
