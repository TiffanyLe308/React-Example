import _ from 'lodash';
import { FETCH_POST, FETCH_POST_ID, DELETE_POST } from '../actions/index';

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST:
      return _.omit(state, action.payload)

    case FETCH_POST_ID:
      // return all states we have and store it in a new object {} = ...state
      // [action.payload.data.id] is a key which sets to the value action.payload.data, it's not an array
      return { ...state, [action.payload.data.id]: action.payload.data }

  case FETCH_POST:
    return _.mapKeys(action.payload.data, 'id');

  default:
    return state;
  }
}
