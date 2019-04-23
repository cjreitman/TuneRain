
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

  buttonSwitch() {
    if (this.props.isplaying) {
      return ( <button onClick={() => this.pause()}>Pause</button> )
    } else {
      return ( <button onClick={() => this.play()} >Play</button> )
    }
  }

  render() {
    return this.buttonSwitch()
  }

}

export default Player;