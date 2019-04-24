import React from 'react';

class SongBox extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  buttonSwitch() {
    if (this.props.isplaying) {
      return ( <button className="pause-button" onClick={() => this.props.pauseSong()}></button> )
    } else {
      return ( <button className="play-button" onClick={() => this.props.playSong(this.props.song)} ></button> )
    }
  }

  render() {
    return (
      <div className="song-box">
        <div className="album-cover"></div> 
  
        {this.buttonSwitch()}
  
        <div className="song-name" >
            {this.props.artist}
          <br/>
            {this.props.song.song_name}
        </div> 
  
        <div className="sound-bar-wrapper"></div>
  
        <div className="sound-bar" ></div>
  
        <div className="comments" ></div>
  
      </div>
    )

  }

};

export default SongBox;