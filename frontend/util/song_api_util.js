

export const fetchSong = (id) => {
  return $.ajax({
    method: "GET",
    url: `api/songs/${id}`
  });
};

export const createSong = (user_id, song) => {
  return $.ajax({
    method: 'POST',
    url: `/api/users/${user_id}/songs`,
    data: song,
    contentType: false,
    processData: false
  });
};

export const fetchSongs = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/songs`
  });
};

export const deleteSong = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/songs/${id}`
  });
};

export const updateSong = (song) => {
  return $.ajax({
    method: "PATCH",
    url: `api/songs/${id}`,
    data: { song }
  });
};
