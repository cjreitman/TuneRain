import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: currentUser
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors.responseJSON
});

export const signup = (user) => {
  return (dispatch) => {
    return APIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user))
    }, err => {
      return dispatch(receiveErrors(err));
    });
  }; 
};

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((user) => {
      return dispatch(receiveCurrentUser(user))
    }, err => {
      return dispatch(receiveErrors(err));
    });
  }; 
};

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);