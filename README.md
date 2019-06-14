# [TuneRain](https://wavcloud1.herokuapp.com)

TuneRain, a SoundCloud clone, is an application enabling users to upload and listen to music.

# Technologies

* [React.js](https://reactjs.org)
* [Redux.js](https://redux.js.org)
* [Ruby on Rails](https://guides.rubyonrails.org)
* [PostgreSQL](https://www.postgresql.org)

# Images

![image](https://user-images.githubusercontent.com/46357004/59389276-f258bf00-8d3b-11e9-89a5-beccaf5395f3.png)
The splash page, featuring sign-in, sign-up, and home-page links.


![image](https://user-images.githubusercontent.com/46357004/59389430-42d01c80-8d3c-11e9-92a4-268276c6190d.png)
A modal for signing up or logging in.


![image](https://user-images.githubusercontent.com/46357004/59389503-727f2480-8d3c-11e9-8f58-ba1cfb0ced9c.png)
The home-page of TuneRain, where songs that have been uploaded by users are displayed and cyclable through the carousel.


![image](https://user-images.githubusercontent.com/46357004/59389564-9e9aa580-8d3c-11e9-8ebb-b25e7b21fd79.png)
The upload song page.


![image](https://user-images.githubusercontent.com/46357004/59389624-be31ce00-8d3c-11e9-8ba3-0a6c17f43354.png)
User profile, enabling users to view songs that have been submitted by that user and, if this is the logged-in users profile, the option to delete songs.

# Code Highlights

```js
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


```

* Logic for handling the player component and controlling the song

```js 

class SongIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {hover: false};
    this.toggleHover = this.toggleHover.bind(this);
  }

  buttonSwitch() {
    if (this.props.isplaying) {
      let hovered = this.state.hover ? "player-pause-buttonx" : "hidden";
      return ( <button className={hovered} onClick={() => this.props.pauseSong()}></button> )
    } else {
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
```
* Rendering individual song items in the context of a Material UI carousel.


## Authors

* **Colin Reitman**
