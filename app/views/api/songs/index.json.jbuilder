json.songs do
  @songs.each do |song| 
    json.set! song.id do
      json.extract! song, :id, :song_name, :artist_id
    end
  end
end

json.users do 
  @songs.each do |song|
    json.set! song.artist_id do 
      json.extract! song.user, :id, :username
    end
  end
end