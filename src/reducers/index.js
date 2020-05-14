import { combineReducers } from 'redux';
import listReducer from './listReducer';
import listNameReducer from './listNameReducer';

const rootReducer = combineReducers({
  listName: listNameReducer,
  listItems: listReducer,
});

export default rootReducer;
