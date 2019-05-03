import c from './../constants';

export default (state = [0,1,2,3], action) => {
  let newState;
  switch(action.type) {
  case c.ACTION_ONE:
    newState = 0;
    state.forEach(function(index) {
      newState += index;
    });
    return newState;
  case c.ACTION_TWO:
    newState = state.map((index) => {
      return index * 2;
    });
    return newState;
  default:
    return state;
  }
};
