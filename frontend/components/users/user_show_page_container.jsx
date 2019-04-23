import { connect } from 'react-redux';
import UserShow from './user_show_page';
import { fetchuser } from './../../actions/user_actions';
import { logout } from './../../actions/session_actions';
import { songSelector } from '../../reducers/selectors/song_selector';
import { setcurrentsong } from './../../actions/player_actions';

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
    songs: songs
  });
};

const mdp = (dispatch) => {
  return ({
    fetchuser: (id) => dispatch(fetchuser(id)),
    logout: () => dispatch(logout()),
    setcurrentsong: (songId) => dispatch(setcurrentsong(songId))
  });
};

export default connect(msp, mdp)(UserShow);