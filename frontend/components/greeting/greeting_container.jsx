import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Greeting from './greeting';
import { fetchsongs } from './../../actions/song_actions';
import { fetchusers } from './../../actions/user_actions';

const mapStateToProps = ({ session, entities: { users, songs } }) => {
  let sings = Object.values(songs);
  // debugger;
  return {
    users: users,
    currentUser: users[session.id],
    songs: sings
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchsongs: () => dispatch(fetchsongs()),
  fetchusers: () => dispatch(fetchusers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);