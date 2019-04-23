export const currentSongSelector = (songs, currentSongId) => {
  return Object.values(songs).filter((song) => {
    if ( song.id === currentSongId ) {
      return song;
    }
  })[0];

};