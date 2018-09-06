import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBookReducer from './reducer_active_book';
import WeatherReducer  from './reducer_weather';
import PostReducer  from './reducer_post';

// All reducer are combine in combineReducers method
const rootReducer = combineReducers({
  // state: (state = {}) => state
  books: BooksReducer,
  activeBook : ActiveBookReducer,
  weather: WeatherReducer,
  posts: PostReducer,
  form: formReducer
});

export default rootReducer;
