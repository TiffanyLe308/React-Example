import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) { 

  switch (action.type) {
    case FETCH_WEATHER:

      // concat is better than push in this situation since it creates new array contains old data with new data
      // not replace the previous array and not manipulate the exist state which highly unrecommend
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; //ES6 approach


  }
  return state;
}
