json.user do 
json.extract! @user, :id, :username
end

json.songs do 
  @user.songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :artist_id, :song_name
      json.url url_for(song.song)
    end  
  end
end