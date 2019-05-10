import c from './../constants';

export default (state = null, action) => {
  let newState;
  switch(action.type) {
  case c.ACTION_ONE:
    newState = null;
    return newState;
  default:
    return state;
  }
};
