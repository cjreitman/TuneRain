import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup, login } from '../../actions/session_actions';
import SessionForm from './session_form';

export const CLEAR_ERRORS = "CLEAR_ERRORS";

const mapStateToProps = ({ errors }) => {
  // debugger;
  return {
    errors: errors.session,
    formType: 'Signup',
    navLink: <Link to="/login">Log In</Link>
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch({type: CLEAR_ERRORS})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
