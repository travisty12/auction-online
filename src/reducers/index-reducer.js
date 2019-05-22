import { combineReducers } from 'redux';
import currentItemReducer from './current-item-reducer';
import validKeyReducer from './valid-key-reducer';
import itemListReducer from './item-list-reducer';
import newItemReducer from './new-item-reducer';
import registerViewReducer from './register-view-reducer';
import settingReducer from './setting-reducer';
import joinViewReducer from './join-view-reducer';
import previousViewReducer from './previous-view-reducer';
import roomBuiltReducer from './room-built-reducer';
import messageListReducer from './message-list-reducer';
import watchReducer from './is-watching-reducer';

const rootReducer = combineReducers({
  currentItem: currentItemReducer,
  bidList: itemListReducer,
  validKey: validKeyReducer,
  newItem: newItemReducer,
  registerView: registerViewReducer,
  previousView: previousViewReducer,
  joinView: joinViewReducer,
  roomBuilt: roomBuiltReducer,
  messageList: messageListReducer,
  settings: settingReducer,
  isWatching: watchReducer,
});

export default rootReducer;
