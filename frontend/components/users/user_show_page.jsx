import React from 'react';
import ControlPanel from './../greeting/control_panel';
import SessionLinks from './../greeting/session_links';
import ShowIndexItem from './show_index_item';
import { Link } from 'react-router-dom';

class UserShow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  showPage() {

    let songObs = this.props.songs.map((song) => {
      return <ShowIndexItem song={song} key={song.artist_id} artist={this.props.user.username} />
    });

    return (
      <>
        <ControlPanel logout={this.props.logout} />
        <div className="profile-header">
          <div className="profile-username-box">
            <h3 className="profile-username">{this.props.user.username}</h3>
          </div>
          <div className="profile-pic"></div>
        </div>

        <div className="banner-buttons">
          <ul className="show-page-links">
            <li><Link to=""><button className="show-page-link">All</button></Link></li>
            <li><Link to=""><button className="show-page-link">Tracks</button></Link></li>
            <li><Link to=""><button className="show-page-link">Albums</button></Link></li>
            <li><Link to=""><button className="show-page-link">Playlists</button></Link></li>
            <li><Link to=""><button className="show-page-link">Reposts</button></Link></li>
          </ul>

          <div className="social-buttons">
            <button className="social-button1">Follow</button>
            <button className="social-button">Share</button>
            <button className="social-button">message</button>
          </div>


        </div>

        <h4 className="spotlight-banner">Spotlight</h4>

        <div className="spotlight">
          <ul>
            {songObs}
          </ul>
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