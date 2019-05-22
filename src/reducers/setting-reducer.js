import constants from './../constants';
const { c } = constants;

export default (state = {minBid: '5', time: '2019-05-23T10:00', tpi: '10'}, action) => {
  let newState;
  switch(action.type) {
  case c.PULL_SETTINGS:
    return action.settings;
  default:
    return state;
  }
};
