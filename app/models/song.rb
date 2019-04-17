class Song < ApplicationRecord

  validates :song_name, :artist_id, presence: true

  belongs_to :user,
    foreign_key: :artist_id,
    class_name: "User"

end
