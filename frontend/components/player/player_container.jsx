
import Player from './player';
import { connect } from 'react-redux';
import { createSong } from '../../actions/song_actions';

const msp = () => {
  return ({
  });
};

const mdp = () => {
  return ({
  });
};

export default connect(msp, mdp)(Player);