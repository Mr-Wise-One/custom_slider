import React from 'react';
import { bgThumbnail } from '../constants';

const VideoBackground = ({ src }) => {
  return (
    <>
      <div className='absolute top-0 left-0 z-10 bg-black bg-opacity-20 w-full h-screen'></div>
      <video
        poster={bgThumbnail}
        autoPlay
        loop
        muted
        playsInline
        className='absolute top-0 left-0 -z-10 w-full h-screen object-cover'
      >
        <source src={src} type='video/mp4'></source>
      </video>
    </>
  );
};

export default VideoBackground;
