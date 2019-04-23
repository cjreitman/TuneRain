import { combineReducers } from 'redux';

import entities from './entities_reducer';
import session from './session_reducer';
import errors from './errors_reducer';
import currentsong from './current_song_reducer';
import player from './player_reducer';

const rootReducer = combineReducers({
  entities: entities,
  session: session,
  errors: errors,
  currentsong: currentsong,
  isplaying: player
});

export default rootReducer;