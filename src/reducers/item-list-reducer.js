import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {
  let newState;
  const exampleKey = 'test';
  switch(action.type) {
  case c.CHECK_KEY:
    newState = action.key === exampleKey;
    return newState;
  default:
    return state;
  }
};
