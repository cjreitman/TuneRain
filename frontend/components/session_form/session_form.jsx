import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import GreetingContainer from './../greeting/greeting_container';


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
      <ul className="error-list">
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
        <>
        
        <Link to="/"><span className="modal-close">&times;</span></Link> 
        <GreetingContainer/>
        <div className="modal-open">
        <div className="opacity">
          <form className="modal-form" onSubmit={this.handleSubmit}>
           
            <br/>
            Please {this.props.formType} 
            
            <div className="login-form">
              <div>
              </div>
              <br/>
              <label>
                <input type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.update('username')}
                  className="login-input"
                />
              </label>
              <br/>
              <br/>
              <label>
                <input type="password"
                  placeholder="Password"
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
              <br/>
              <br/>
              <div className="alternate">
                or {this.props.navLink}
              </div>
              
            </div>
            {this.renderErrors()}
          </form>
        </div>
        </div>
        </>
        
      

    );
  }
}

export default withRouter(SessionForm);
