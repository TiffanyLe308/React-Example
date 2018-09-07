import _ from 'lodash';
import { FETCH_POST, FETCH_POST_ID } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST_ID:
      // return all states we have and store it in a new object {}
      // [action.payload.data.id] is a key set to the value action.payload.data, it's not an array 
      return { ...state, [action.payload.data.id]: action.payload.data }

  case FETCH_POST:
    return _.mapKeys(action.payload.data, 'id');

  default:
    return state;
  }
}
