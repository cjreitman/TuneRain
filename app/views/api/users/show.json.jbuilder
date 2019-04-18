json.user do 
json.extract! @user, :id, :username
end

json.songs do 
  @user.songs.each do |song|
    json.extract! song, :artist_id, :song_name
  end
end