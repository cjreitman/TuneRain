class Song < ApplicationRecord

  validates :song_name, presence: true

  belongs_to :user,
    foreign_key: :artist_id,
    class_name: "User"

  has_one_attached :song  

end
