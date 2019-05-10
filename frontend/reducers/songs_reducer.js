import { RECEIVE_SONG, RECEIVE_SONGS, REMOVE_SONG, ADD_PLAYLIST_SONG } from '../actions/song_actions';
import { RECEIVE_USER } from './../actions/user_actions';
import { merge } from 'lodash';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_SONGS:
      return action.payload.songs;
    case RECEIVE_USER: 
      newState = merge({}, state, action.payload.songs);
      return newState;  
    case RECEIVE_SONG:
      newState = merge({}, state, { [action.song.id]: action.song });
      return newState;
    case REMOVE_SONG:
      newState = merge({}, state);
      delete(newState[action.songId]);
      return newState;
    default:
      return state;
  }
};

export default songsReducer;