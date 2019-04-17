json.array! @songs do |song| 
  json.extract! song, :id, :song_name, :artist_id
end