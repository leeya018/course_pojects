import { ERROR_MESSAGE_OPEN, ERROR_MESSAGE_CLOSED } from '../constants/modal';

const initialState = {
  errorModal: { message: '', isOpen: false }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ERROR_MESSAGE_OPEN:
      return {
        ...state,
        errorModal: { message: action.payload.message, isOpen: true }
      };
    case ERROR_MESSAGE_CLOSED:
      return {
        ...state,
        errorModal: { message: '', isOpen: false }
      };
    default:
      return state;
  }
};
