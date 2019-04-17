import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NoMatch from './no_match';

// import DemoLoginButton from './session_form/demo_login_button_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
  <header>
    {/* <GreetingContainer /> */}
  </header>
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <Route component={NoMatch} />
    </Switch>
  </div>
  
);

export default App;