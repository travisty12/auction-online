import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {
  let newState;
  switch(action.type) {
  case c.GRAB_MESSAGE:
    newState = state.slice();
    newState.push(action.message);
    return newState;
  case c.GRAB_ALL:
    newState = action.messageList;
    return newState;
  default:
    return state;
  }
};
