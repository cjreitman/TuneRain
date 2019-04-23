
export const START_PLAYER = "START_PLAYER";
export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";

const receiveStart = () => {
  return ({
    type: START_PLAYER
  });
};

const receivePause = () => {
  return ({
    type: PAUSE_PLAYER
  });
};

const receiveCurrentSong = (songId) => {
  return ({
    type: RECEIVE_CURRENT_SONG,
    songId: songId
  });
};

export const startplayer = () => {
  return dispatch(receiveStart());
};

export const pauseplayer = () => {
  return dispatch(receivePause());
};

export const setcurrentsong = (songId) => {
  return dispatch(receiveCurrentSong(songId));
};