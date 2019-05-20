import constants from './../constants';
const { c } = constants;

export default (state = [
  {
    item: 'example1',
  },
  {
    item: 'example2',
  },
], action) => {
  let newState;
  switch(action.type) {
  case c.ADD_ITEM:
    newState = state.slice();
    newState.push({
      item: action.item});
    return newState;
  default:
    return state;
  }
};
