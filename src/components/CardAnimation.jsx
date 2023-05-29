import React from 'react';

const CardAnimation = () => {
  return (
    <div className='relative top-0 left-0  w-full h-full z-10 overflow-hidden'>
      <span className='absolute top-0 left-0 w-full h-[3px] animate-first bg-gradient-to-r from from-transparent to-neon-blue'></span>
      <span className='absolute top-0 right-0 h-full w-[3px] animate-second bg-gradient-to-b from from-transparent to-neon-blue'></span>
      <span className='absolute bottom-0 left-0 w-full h-[3px] animate-third bg-gradient-to-l from from-transparent to-neon-blue'></span>
      <span className='absolute top-0 left-0 h-full w-[3px] animate-fourth bg-gradient-to-t from from-transparent to-neon-blue'></span>
    </div>
  );
};

export default CardAnimation;
