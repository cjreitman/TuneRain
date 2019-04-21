json.user do 
json.extract! @user, :id, :username
end

json.songs do 
  @user.songs.each do |song|
    json.set! song.id do
      json.extract! song, :artist_id, :song_name
    end  
  end
end