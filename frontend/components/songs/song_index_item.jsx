import React from 'react';
import { Link } from 'react-router-dom';

const SongIndexItem = (props) => {
  return ( <div> {props.song.song_name} </div> )
};

export default SongIndexItem;

