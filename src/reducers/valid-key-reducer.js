import c from './../constants';

export default (state = false, action) => {
  let newState;
  const exampleKey = '1234';
  switch(action.type) {
  case c.CHECK_KEY:
    newState = action.key === exampleKey;
    return newState;
  default:
    return state;
  }
};
