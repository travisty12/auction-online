import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';
import validKeyReducer from './valid-key-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
  validKey: validKeyReducer
});

export default rootReducer;
