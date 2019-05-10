
import { RECEIVE_CURRENT_SONG } from '../actions/player_actions';
import { merge } from 'lodash';

const playlistIndexReducer = (state = 0, action) => {
  let newState;
  switch(action.type) {
      case RECEIVE_CURRENT_SONG:
        newState = state + 1;
        return newState;
    default:
      return state;
  }
};


export default playlistIndexReducer;