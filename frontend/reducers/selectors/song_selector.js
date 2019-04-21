
export const songSelector = (songs, userId) => {
  return songs.filter((song) => {
    if ( song.artist_id === parseInt(userId) ) {
      return song;
    }
  });
};