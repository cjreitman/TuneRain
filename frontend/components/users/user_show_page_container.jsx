import { connect } from 'react-redux';
import UserShow from './user_page';
import { fetchuser } from './../../actions/user_actions';
import { logout } from './../../actions/session_actions';
import { songSelector } from '../../reducers/selectors/song_selector';
import { setcurrentsong, pauseplayer } from './../../actions/player_actions';
import { deletesong } from './../../actions/song_actions';

const msp = (state, ownProps) => {
  let songs = Object.values(state.entities.songs);
  let userId = ownProps.match.params.artistId;
  let user = state.entities.users[userId];
  
  if (songs) {
    songs = songSelector(songs, userId);
  }
  return ({
    user: user,
    currentUser: state.entities.users[state.session.id],
    songs: songs,
    isplaying: state.isplaying
  });
};

const mdp = (dispatch) => {
  return ({
    fetchuser: (id) => dispatch(fetchuser(id)),
    logout: () => dispatch(logout()),
    setcurrentsong: (songId) => dispatch(setcurrentsong(songId)),
    pauseplayer: () => dispatch(pauseplayer()),
    deletesong: (songId) => dispatch(deletesong(songId))
  });
};

export default connect(msp, mdp)(UserShow);