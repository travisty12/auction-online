import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer
});

export default rootReducer;
