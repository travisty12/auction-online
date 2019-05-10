import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';
import validKeyReducer from './valid-key-reducer';
import itemListReducer from './item-list-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
  itemList: itemListReducer,
  validKey: validKeyReducer
});

export default rootReducer;
