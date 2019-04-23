import { RECEIVE_CURRENT_SONG } from '../actions/player_actions';

const currentSongReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      return action.songId; 
    default:
      return state;
  }
};

export default currentSongReducer;