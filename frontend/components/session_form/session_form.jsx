import React from 'react';
import { withRouter } from 'react-router-dom';
import DemoLogin from './demo_login_button';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demo = this.demo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  demo(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"})
  }

  componentDidMount() {
    this.props.clearErrors()
  }

  componentWillUnmount() {
    this.props.clearErrors()
  }

  render() {
    return (
      
      <div className="modal is-open">
        <form className="modal-form" onSubmit={this.handleSubmit}>
        <Link to="/"><span className="modal-close js-modal-close">x</span></Link>  
          <br/>
          Please {this.props.formType} or {this.props.navLink}
          {this.renderErrors()}
          <div className="login-form">
            <div>
            </div>
            <br/>
            <label>Username:
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} /> 
            <br/>
            <br/>
            <button className="guest-button" onClick={this.demo} >Try it as a Guest</button>
          </div>
        </form>
        
      </div>


    );
  }
}

export default withRouter(SessionForm);
