import constants from './../constants';
const { c } = constants;

export default (state = [], action) => {
  let newState;
  switch(action.type) {
  case c.ADD_ITEM:
    newState = state.slice();
    newState.push(action.item);
    return newState;
  case c.REMOVE_ITEM:
    newState = state.slice();
    newState.splice(action.index,1);
    return newState;
  case c.CLEAR_ITEMS:
    return [];
  case c.FILL_ITEMS:
    return action.items;
  default:
    return state;
  }
};
