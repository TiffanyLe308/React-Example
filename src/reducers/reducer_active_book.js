// All reducers get 2 arguments, current state (in the reducer, not app state) and action

export default function(state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
