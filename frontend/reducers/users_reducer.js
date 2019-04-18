import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions';
import { RECEIVE_SONGS } from '../actions/song_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USERS:
      return action.users;
    case RECEIVE_SONGS:
      return merge({}, state, action.payload.users);
    case RECEIVE_USER:
      newState = merge({}, state, { [action.user.id]: action.user });
      return newState;
    default:
      return state;
  }
};

export default usersReducer;