import constants from './../constants';
const { c } = constants;

export default (state = false, action) => {
  let newState;
  switch(action.type) {
  case c.START_WATCH:
    newState = true;
    return newState;
  default:
    return state;
  }
};
