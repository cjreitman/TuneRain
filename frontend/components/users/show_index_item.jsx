import React from 'react';

const ShowIndexItem = (props) => {
  return (
    <div className="song-box">
      <div className="album-cover"></div>   
      <button className="play-button"></button>
      <div className="song-name" >
          {props.artist}
        <br/>
          {props.song.song_name}
      </div> 
    </div>
  )
};

export default ShowIndexItem;