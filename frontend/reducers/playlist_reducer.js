
import { RECEIVE_CURRENT_SONG } from '../actions/player_actions';
import { merge } from 'lodash';

const playlistReducer = (state = {}, action) => {
  let count = Object.keys(state).length;
  let arr = Object.values(state);
  Object.freeze(state);
  let newState;
  switch(action.type) {
      case RECEIVE_CURRENT_SONG:
        count = count + 1;
        newState = merge({}, state, { [count]:action.songId });
        return newState;
    default:
      return state;
  }
};


export default playlistReducer;

