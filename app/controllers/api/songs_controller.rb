class Api::SongsController < ApplicationController

  def index
    @songs = Song.all.includes(:user)
    render :index
  end

  def show
    @song = Song.find(params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)
    @song[:song_name] = params[:song][:song_name]
    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end

  end

  def destroy
    @song = Song.find(params[:id])
    @song.delete
    render :index
  end

  def update
    @song = Song.find(params[:id])
    if @song.update(song_params)
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  private

  def song_params
    params.require(:song).permit(:artist_id, :song, :song_name)
  end

end
