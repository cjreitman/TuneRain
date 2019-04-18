import { connect } from 'react-redux';
import UserShow from './user_show_page';
import { fetchuser } from './../../actions/user_actions';
import { logout } from './../../actions/session_actions';

const msp = (state, ownProps) => {
  let userId = ownProps.match.params.artistId;
  let user = state.entities.users[userId];
  return ({
    user: user,
    currentUser: state.entities.users[state.session.id]
  });
};

const mdp = (dispatch) => {
  return ({
    fetchuser: (id) => dispatch(fetchuser(id)),
    logout: () => dispatch(logout())
  });
};

export default connect(msp, mdp)(UserShow);