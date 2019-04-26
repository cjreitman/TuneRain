import React from 'react';


class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.toggleHover = this.toggleHover.bind(this);
  }

  buttonSwitch() {
    if (this.props.isplaying) {
      debugger;
      let hovered = this.state.hover ? "player-pause-buttonx" : "hidden";
      return ( <button className={hovered} onClick={() => this.props.pauseSong()}></button> )
    } else {
      debugger;
      let hovered = this.state.hover ? "player-play-buttonx" : "hidden";
      return ( <button className={hovered} onClick={() => this.props.playSong(this.props.song)} ></button> )
    }
  }

  toggleHover() {
    this.setState({hover: !this.state.hover})
  }

  render() {

    return ( <div> 
        <div className="slide" onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover}> {this.buttonSwitch()} </div>
        <p className="song-title">{this.props.song.song_name}</p> 
        <p className="uploader">{this.props.song.user}</p> 
      </div> 
    )
  }

} 



export default SongIndexItem;

