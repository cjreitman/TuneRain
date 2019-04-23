import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NoMatch from './no_match';
import UserShowPageContainer from './users/user_show_page_container';

// import DemoLoginButton from './session_form/demo_login_button_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import SongFormContainer from './songs/song_form_container';
import PlayerContainer from './player/player_container';

const App = () => (
  <div className="app-container">
    <Switch>
      <Route exact path="/" component={GreetingContainer}/>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/wavecloud/:artistId" component={UserShowPageContainer} />
      <ProtectedRoute exact path="/wavecloud/:userId/uploadsong" component={SongFormContainer}/>
      <Route component={NoMatch} />
    </Switch>

    <footer>
      <PlayerContainer/>
    </footer>

  </div>
  
);

export default App;