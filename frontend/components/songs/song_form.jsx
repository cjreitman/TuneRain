import ControlPanel from './../greeting/control_panel';
import React from 'react';

class SongForm extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.currentTarget.files[0]
    });
  }

  updateTitle(field) {
    return (e) => this.setState({
      [field]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('song[artist_id]', this.props.currentUser.id);
    if (this.state.songFile) {
      formData.append('song[song]', this.state.songFile);
      formData.append('song[song_name]', this.state.songName);
    }
    this.props.createSong(this.props.currentUser.id, formData);
  }

  render() {
    
    return (
      <div>
        <ControlPanel currentUser={this.props.currentUser} logout={this.props.logout} />
        <div className="upload-form-container">
          <form className="upload-form" onSubmit={this.handleSubmit}>
            <label className="submit-file">
              <input type="file" onChange={this.update("songFile")} />
            </label>

            <label>
              <input type="text" onChange={this.updateTitle("songName")} />
            </label>

            <input className="file-submit-button" type="submit" value="submit"/>

          </form>
        </div>
      </div>
    )
  }

}

export default SongForm;