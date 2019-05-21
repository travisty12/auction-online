import constants from './../constants';
const { c } = constants;

export default (state = false, action) => {
  let newState;
  switch(action.type) {
  case c.CHECK_ROOM:
    newState = !state;
    return newState;
  case c.RESET_MAIN:
    return false;
  default:
    return state;
  }
};
