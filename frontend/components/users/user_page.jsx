import React from 'react';
import ControlPanel from '../greeting/control_panel';
import SessionLinks from '../greeting/session_links';
import SongBox from './song_box';
import { setcurrentsong, pauseplayer } from '../../actions/player_actions';

class UserPage extends React.Component {

  constructor(props) {
    super(props);
    this.deleteSong = this.deleteSong.bind(this);
  }

  playSong(song) {
    setcurrentsong(song.id);
  }

  pauseSong() {
    pauseplayer();
  }

  componentDidMount() {
    this.props.fetchuser(this.props.match.params.artistId);
  }

  deleteSong(songId) {
    this.props.deletesong(songId);
  }

  showPage() {

    let songObs = this.props.songs.map((song) => {
      return <SongBox currentUser={this.props.currentUser} 
        song={song} 
        key={song.id} 
        artist={this.props.user.username} 
        playSong={this.playSong} 
        pauseSong={this.pauseSong} 
        deleteSong={this.deleteSong}
        isplaying={this.props.isplaying}/>
    });

    return (
      <>
        <ControlPanel logout={this.props.logout} currentUser={this.props.currentUser}/>
        <div className="profile-wrapper"> 
        
          <div className="profile-header">
          <div className="profile-pic"></div>
            <div className="profile-username-box">
              <h3 className="profile-username">{this.props.user.username}</h3>
            </div>
            
          </div>

          {/* <div className="button-div">

            <div className="banner-buttons">

            </div>

          </div> */}

          {/* <div className="follower-box"></div> */}

          <h4 className="spotlight-banner"></h4>

          <div className="spotlight">
            <ul className="song-box-list">
              {songObs}
            </ul>

          </div>
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

export default UserPage;