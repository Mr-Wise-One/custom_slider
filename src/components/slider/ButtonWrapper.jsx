import React from 'react';

import { useScreenSize } from '../../custom-hooks';

const ButtonWrapper = ({
  left = false,
  right = false,
  handleOnClick,
  children,
}) => {
  const screenSize = useScreenSize();

  if (left && !right) {
    return (
      <span
        className='absolute top-2/4 left-[175px] text-neon-blue text-center cursor-pointer z-45'
        style={{
          fontSize: `${
            screenSize.width <= 896
              ? '40px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '44px'
              : '48px'
          }`,
          marginTop: `${
            screenSize.width <= 896
              ? '50px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '70px'
              : screenSize.width < 1600
              ? '80px'
              : screenSize.width < 1920
              ? '100px'
              : '120px'
          }`,
          left: `${
            screenSize.width <= 896
              ? '50px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '50px'
              : screenSize.width < 1600
              ? '125px'
              : screenSize.width < 1920
              ? '150px'
              : '175px'
          }`,
        }}
        onClick={handleOnClick}
      >
        {children}
      </span>
    );
  } else if (!left && true) {
    return (
      <span
        className='absolute top-2/4 right-[175px] text-neon-blue text-[48px] text-center cursor-pointer z-45'
        style={{
          fontSize: `${
            screenSize.width <= 896
              ? '40px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '44px'
              : '48px'
          }`,
          marginTop: `${
            screenSize.width <= 896
              ? '50px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '70px'
              : screenSize.width < 1600
              ? '80px'
              : screenSize.width < 1920
              ? '100px'
              : '120px'
          }`,
          right: `${
            screenSize.width <= 896
              ? '50px'
              : screenSize.width <= 1080 && screenSize.height <= 480
              ? '50px'
              : screenSize.width < 1600
              ? '125px'
              : screenSize.width < 1920
              ? '150px'
              : '175px'
          }`,
        }}
        onClick={handleOnClick}
      >
        {children}
      </span>
    );
  } else {
    return null;
  }
};

export default ButtonWrapper;
