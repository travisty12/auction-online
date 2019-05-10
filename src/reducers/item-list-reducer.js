import c from './../constants';

export default (state = [
  {
    item: 'example1',
    bid: 1,
    bidder: 'bidder1'
  },
  {
    item: 'example2',
    bid: 5,
    bidder: 'bidder2'
  },
], action) => {
  let newState;
  switch(action.type) {
  case c.CHECK_KEY:
    newState = action.key === exampleKey;
    return newState;
  default:
    return state;
  }
};
