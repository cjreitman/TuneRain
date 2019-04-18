import React from 'react';
import ControlPanel from './../greeting/control_panel';
import SessionLinks from './../greeting/session_links';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  showPage() {
    return (
      <>
        <ControlPanel logout={this.props.logout} />
      </>
    )
  }

  render() {
    if (this.props.currentUser) {
      return this.showPage()
    } else {
      return <SessionLinks/>;
    }
  }

}

export default UserShow;