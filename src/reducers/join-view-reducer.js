import constants from './../constants';
const { c } = constants;

export default (state = true, action) => {
  let newState;
  switch(action.type) {
  case c.CHANGE_JOIN_VIEW:
    newState = !state;
    return newState;
  default:
    return state;
  }
};
