import React from 'react';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  render() {
 
    return <div>hi there</div>
    
  }

}

export default UserShow;