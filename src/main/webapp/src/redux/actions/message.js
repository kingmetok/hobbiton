import { SET_MESSAGE, CLEAR_MESSAGE } from '../actionsTypes';

export const setMessageAction = (message) => ({
  type: SET_MESSAGE,
  payload: message,
});

export const clearMessageAction = () => ({
  type: CLEAR_MESSAGE,
});