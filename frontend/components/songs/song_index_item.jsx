import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = (props) => {
  return ( 
  <div> 
    <div className="slide"></div>
    <p className="song-title">{props.song.song_name}</p> 
    <p className="uploader">{props.song.user}</p> 
  </div> )
};

export default SongIndexItem;

