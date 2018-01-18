import { ERROR_MESSAGE_OPEN, ERROR_MESSAGE_CLOSED } from '../constants/modal';

export const showError = message => ({ type: ERROR_MESSAGE_OPEN, payload: { message } });

export const hideError = () => ({ type: ERROR_MESSAGE_CLOSED });
