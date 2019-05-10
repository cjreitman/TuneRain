
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
    currentsong: currentsong,
    playlist: state.playlist,
    playlistindex: state.playlistindex
  });
};

const mdp = (dispatch) => {
  return ({
    pauseplayer: () => dispatch(pauseplayer()),
    startplayer: () => dispatch(startplayer()),
    setcurrentsong: (id) => dispatch(setcurrentsong(id))
  });
};

export default connect(msp, mdp)(Player);