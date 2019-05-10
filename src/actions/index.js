import * as types from './../constants/ActionTypes';
import v4 from 'uuid/v4';

export const registerRoom = (email) => ({
  type: types.REGISTER_ROOM,
  email
});

export const checkKey = (key) => ({
  type: types.CHECK_KEY,
  key
});
