
import Player from './player';
import { connect } from 'react-redux';
import { setcurrentsong, pauseplayer, startplayer } from './../../actions/player_actions';
import { currentSongSelector } from './../../reducers/selectors/current_song_selector';

const msp = (state) => {

  let currentsong;
  if ( state.currentsong ) {
    currentsong = currentSongSelector(state.entities.songs, state.currentsong);
  }
  return ({
    isplaying: state.isplaying,
    currentsong: currentsong
  });
};

const mdp = (dispatch) => {
  return ({
    pauseplayer: () => dispatch(pauseplayer()),
    startplayer: () => dispatch(startplayer()),
    setcurrentsong: () => dispatch(setcurrentsong())
  });
};

export default connect(msp, mdp)(Player);