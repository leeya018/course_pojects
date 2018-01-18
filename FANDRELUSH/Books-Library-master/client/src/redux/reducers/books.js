import {
  GET_BOOKS,
  DELETE_BOOK,
  ADD_BOOK,
  EDIT_BOOK,
  GET_BOOKS_SUCCESS,
  GET_BOOKS_FAILURE
} from '../constants/books';

const initialState = {
  books: [],
  getBooksPending: false,
  getBooksError: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, getBooksPending: true };
    case DELETE_BOOK:
      return {
        ...state,
        books: state.books.filter(book => book.id !== action.payload.id)
      };
    case ADD_BOOK:
      return {
        ...state,
        books: [...state.books, action.payload.book]
      };
    case EDIT_BOOK:
      return {
        ...state,
        books: state.books.map(
          book =>
            book.id === action.payload.id
              ? {
                  ...book,
                  volumeInfo: {
                    ...book.volumeInfo,
                    title: action.payload.title,
                    publishedDate: action.payload.publishedDate,
                    authors: [action.payload.author]
                  }
                }
              : { ...book }
        )
      };
    case GET_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        getBooksPending: false
      };
    case GET_BOOKS_FAILURE:
      return {
        ...state,
        getBooksError: action.payload.error,
        getBooksPending: false
      };
    default:
      return state;
  }
};
