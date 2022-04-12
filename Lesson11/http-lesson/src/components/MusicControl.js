import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

function MusicControl({ link }) {
  return (
    <div className='music-control'>
      <ReactAudioPlayer src={link} controls />
    </div>
  );
}

export default MusicControl;
