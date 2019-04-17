class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.string :song_name, null: false
      t.integer :artist_id, null: false, index: true
      t.timestamps
    end
  end
end
