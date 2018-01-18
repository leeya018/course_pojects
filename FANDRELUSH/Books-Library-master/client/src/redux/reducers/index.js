import { combineReducers } from 'redux';
import books from './books';
import modal from './modal';

const bookApp = combineReducers({
  books,
  modal
});

export default bookApp;
