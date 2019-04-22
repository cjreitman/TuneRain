
import SongForm from './song_form';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { createSong } from '../../actions/song_actions';

const msp = (state) => {
  return ({
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = (dispatch) => {
  return ({
    logout: () => dispatch(logout()),
    createSong: (userId, song) => dispatch(createSong(userId, song))
  });
};

export default connect(msp, mdp)(SongForm);

