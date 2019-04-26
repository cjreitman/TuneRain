import React from 'react';
import { Link } from 'react-router-dom';
import SongIndexItem from './../songs/song_index_item';
import ControlPanel from './control_panel';
import SessionLinks from './session_links';
import SimpleSlider from './song_carousel';
import { setcurrentsong, pauseplayer } from '../../actions/player_actions';

class Greeting extends React.Component { 
  constructor(props) {
    super(props);
  }

  playSong(song) {
    setcurrentsong(song.id);
  }

  pauseSong() {
    pauseplayer();
  }

  componentDidMount() {
    this.props.fetchsongs();
  }

  homePage() {
    let songs = this.props.songs.map((song) => {
      return  <div key={song.id} ><SongIndexItem  song={song} playSong={this.playSong} pauseSong={this.pauseSong} isplaying={this.props.isplaying} /> <div> <Link to={`/wavecloud/${song.artist_id}`} className="uploader" >{this.props.users[song.artist_id].username}</Link> </div> </div>  
    })

    return (
      
    <div className="home-page-wrapper">
      
      <ControlPanel logout={this.props.logout} currentUser={this.props.currentUser}/>
      <div className="home-page">
        <section className="songlist">
          {/* <ul>{songs}</ul> */}
          {/* <div><SongCarousel/></div> */}
          <h2 className="song-page-banner" >More of what you like</h2>
          <p className="song-page-description">Suggestions based on what you've liked or played</p>
            <SimpleSlider songs={songs}/>
          <div className="slider-divider"></div>
          <h2 className="song-page-banner" >The Bridge</h2>
          <p className="song-page-description">Music to get you through</p>
            <SimpleSlider songs={songs}/>
            <div className="slider-divider"></div>
          <h2 className="song-page-banner" >The Zone</h2>
          <p className="song-page-description">Songs for life</p>
            <SimpleSlider songs={songs}/>
            <div className="slider-divider"></div>
          <h2 className="song-page-banner" >WaveCloud Charts</h2>
          <p className="song-page-description">The most played tracks on WaveCloud this week</p>
            <SimpleSlider songs={songs}/>
            <div className="slider-divider"></div>
          <h2 className="song-page-banner" >The Drop</h2>
          <p className="song-page-description">New music, updated all the time</p>
            <SimpleSlider songs={songs}/>
            <div className="slider-divider"></div>
          <h2 className="song-page-banner" >Waves</h2>
          <p className="song-page-description">Chill tunes</p>
        </section>

        <div className="right-console"></div>
      </div>

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