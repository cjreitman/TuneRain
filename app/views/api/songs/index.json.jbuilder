json.array! @songs do |song| 
  json.extract! song, :song_name, :artist_id
end