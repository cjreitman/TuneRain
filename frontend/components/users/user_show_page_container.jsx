import { connect } from 'react-redux';
import UserShow from './user_show_page';
import { fetchuser } from './../../actions/user_actions';

const msp = (state, ownProps) => {
  
  let userId = ownProps.match.params.artistId;
  let user = state.users[userId];
  return ({
    user: user
  });
};

const mdp = (dispatch) => {
  return ({
    fetchuser: (id) => dispatch(fetchuser(id))
  });
};

export default connect(msp, mdp)(UserShow);