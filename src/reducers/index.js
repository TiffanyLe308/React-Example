import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';

// All reducer are combine in combineReducers method
const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook : ActiveBookReducer
});

export default rootReducer;
