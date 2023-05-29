import React from 'react';

import { useScreenSize } from '../custom-hooks';

const TextAnimation = ({ text }) => {
  const screenSize = useScreenSize();

  return (
    <h1
      className='absolute top-[5%] left-[5%] text-white z-10 font-semibold animate-text-glow'
      style={{
        fontFamily: 'Roboto',
        fontSize: `${
          screenSize.width <= 896
            ? '28px'
            : screenSize.width <= 1080 && screenSize.height <= 480
            ? '28px'
            : screenSize.width < 1280
            ? '42px'
            : screenSize.width < 1600
            ? '48px'
            : screenSize.width < 1920
            ? '54px'
            : '64px'
        }`,
      }}
    >
      {text}
    </h1>
  );
};

export default TextAnimation;
