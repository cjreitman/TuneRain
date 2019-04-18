import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './../songs/song_index_item';
import ControlPanel from './control_panel';
import SessionLinks from './session_links';

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchsongs();
  }

  homePage() {
    let songs = this.props.songs.map((song) => {
      return  <div key={song.id} ><SongIndexItem  song={song}  /> <div> by <Link to={`/wavecloud/${song.artist_id}`} >{this.props.users[song.artist_id].username}</Link> </div> </div>  
    })

    return (<div>

      <ControlPanel logout={this.props.logout}/>

      <section>
        <ul>{songs}</ul>
      </section>
    
      </div>)
  };

  render() {
    if (this.props.currentUser) {
      return this.homePage()
    } else {
      return <SessionLinks/>;
    }
  }
    
};


export default Greeting;