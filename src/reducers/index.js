import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
// import deleteItemReducer from './deleteItemReducer';

const rootReducer = combineReducers({
  items: itemsReducer,
  //   deleteItem: deleteItemReducer,
});

export default rootReducer;
