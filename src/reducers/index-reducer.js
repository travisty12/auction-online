import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';
import validKeyReducer from './valid-key-reducer';
import itemListReducer from './item-list-reducer';
import newItemReducer from './new-item-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
  bidList: itemListReducer,
  validKey: validKeyReducer,
  newItem: newItemReducer
});

export default rootReducer;
