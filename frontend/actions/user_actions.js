import * as ApiUtil from './../util/user_api_util';

export const RECEIVE_USERS = "RECEIVE_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

const receiveUsers = (users) => {
  return ({
    type: RECEIVE_USERS,
    users: users
  });
};

const receiveUser = (payload) => {
  return ({
    type: RECEIVE_USER,
    payload: payload
  });
};

export const fetchusers = () => {
  return (dispatch) => {
    return ApiUtil.fetchUsers().then((users) => {
      return dispatch(receiveUsers(users));
    });
  };
};

export const fetchuser = (id) => {
  return (dispatch) => {
    return ApiUtil.fetchUser(id).then((payload) => {
      return dispatch(receiveUser(payload));
    });
  };
};