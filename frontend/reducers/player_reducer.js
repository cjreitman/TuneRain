import { PAUSE_PLAYER, START_PLAYER, RECEIVE_CURRENT_SONG } from '../actions/player_actions';

const playerSongReducer = (state = null, action) => {
  Object.freeze(state);
  switch(action.type) {
    case PAUSE_PLAYER:
      return false;
    case START_PLAYER:
      return true;   
    case RECEIVE_CURRENT_SONG:
      return true;
    default:
      return state;
  }
};

export default playerSongReducer;