json.extract! @song, :id, :song_name, :artist_id
json.url url_for(@song.song)