
export const START_PLAYER = "START_PLAYER";
export const PAUSE_PLAYER = "PAUSE_PLAYER";
export const RECEIVE_CURRENT_SONG = "RECEIVE_CURRENT_SONG";
export const SUBTRACT_INDEX = "SUBTRACT_INDEX";
export const RECEIVE_INDEX = "RECEIVE_INDEX";

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

const subtractIndex = () => {
  return ({
    type: SUBTRACT_INDEX
  });
};

const receiveIndex = (index) => {
  return ({
    type: RECEIVE_INDEX,
    index: index
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

export const nextSong = () => {
  return dispatch(addIndex());
};

export const prevSong = () => {
  return dispatch(subtractIndex());
};

export const setIndex = (index) => {
  return dispatch(receiveIndex(index));
};