import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = (props) => {
  return ( <div> <div> {props.song.song_name} </div>  <div>{props.song.user}</div>  </div> )
};

export default SongIndexItem;

