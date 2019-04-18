import React from 'react';
import ControlPanel from './../greeting/control_panel';
import SessionLinks from './../greeting/session_links';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  showPage() {
    return (
      <>
        <ControlPanel logout={this.props.logout} />
        <div className="profile-header">
          <div className="profile-username-box">
            <h3 className="profile-username">{this.props.user.username}</h3>
          </div>
          <div className="profile-pic"></div>
        </div>

        <div className="spotlight">

        </div>

      </>
    )
  }

  render() {
    if (this.props.user) {
      return this.showPage()
    } else {
      return <SessionLinks/>; 
    }
  }

}

export default UserShow;