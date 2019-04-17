import * as ApiUtil from './../util/song_api_util';

export const RECEIVE_SONG = "RECEIVE_SONG";
export const RECEIVE_SONGS = "RECEIVE_SONGS";
export const REMOVE_SONG = "REMOVE_SONG";

const receiveSong = (song) => {
  return ({
    type: RECEIVE_SONG,
    song: song
  });
};

const receiveSongs = (songs) => {
  return ({
    type: RECEIVE_SONGS,
    songs: songs
  });
};

const removeSong = (song) => {
  return ({
    type: REMOVE_SONG,
    songId: song.id
  });
};

export const fetchSong = (id) => {
  return (dispatch) => {
    return ApiUtil.fetchSong(id).then((song) => {
      return dispatch(receiveSong(song));
    });
  };
};

export const fetchsongs = () => {
  return (dispatch) => {
    return ApiUtil.fetchSongs().then((songs) => {
      return dispatch(receiveSongs(songs));
    });
  };
};

export const createSong = (user_id, song) => {
  return (dispatch) => {
    return ApiUtil.createSong(user_id, song).then((song) => {
      return dispatch(receiveSong(song));
    });
  };
};

export const updateSong = (song) => {
  return (dispatch) => {
    return ApiUtil.createSong(song).then((song) =>{
      return dispatch(receiveSong(song));
    });
  };
};

export const deleteSong = (id) => {
  return (dispatch) => {
    return ApiUtil.deleteSong(id).then((song) =>{
      return dispatch(removeSong(song));
    });
  };
};