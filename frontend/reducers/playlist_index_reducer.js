
import { SUBTRACT_INDEX, RECEIVE_INDEX } from '../actions/player_actions';

const playlistIndexReducer = (state = 0, action) => {
  let newState;
  switch(action.type) {
      case RECEIVE_INDEX: 
        return action.index;
      case SUBTRACT_INDEX:
        newState = state - 1;
        return newState;
    default:
      return state;
  }
};


export default playlistIndexReducer;