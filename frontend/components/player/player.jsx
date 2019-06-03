
import React from 'react';

class Player extends React.Component {

  constructor(props) {
    super(props);
    this.audio = new Audio();
  }

  componentDidUpdate(oldProps) {
    if ( this.props.currentsong ) {
      if (this.props.isplaying === true) {
        if ( !oldProps.currentsong || this.props.currentsong.url != oldProps.currentsong.url ) {
          this.audio.src = this.props.currentsong.url;
        }
        this.audio.play();
      } else if ( this.props.isplaying === false ) {
        this.audio.pause();
      }
    }
  }

  play() {
    this.props.startplayer();
  }

  pause() {
    this.props.pauseplayer();
  }

  previousSong() {

    if ( this.props.playlistindex !== 0 ) {
      let prevSong = this.props.playlist[this.props.playlistindex - 1];
      this.props.setcurrentsong(prevSong);
      this.props.prevSong();
    } 

    if ( this.props.playlistindex === 0 ) {
      let index = Object.keys(this.props.playlist).length;
      let prevSong = this.props.playlist[index - 1];
      this.props.setcurrentsong(prevSong);
      this.props.prevSong();
      this.props.setIndex(index - 1);
    }

  }

  buttonSwitch() {
    if (this.props.isplaying) {
      return ( <button className="player-pause-button" onClick={() => this.pause()}></button> )
    } else {
      return ( <button className="player-play-button" onClick={() => this.play()} ></button> )
    }
  }

  render() {
    return (
      <div className="player-box">
        <div className="player">
          <div className="control-buttons" >
            <div className="left-player-box">
              <button className="prev-song-button" onClick={() => this.previousSong()}></button>
              {this.buttonSwitch()}
              <button className="next-song-button"></button>
              {/* <button className="shuffle-song-button"></button>
              <button className="repeat-song-button"></button> */}
            </div>
            {/* <div className="player-thing"></div> */}
            {/* <div className="share-volume-buttons"></div> */}
            {/* <div className="right-player-elements" ></div> */}
          </div>
        </div>
      </div>
      
    )
  }

}

export default Player;