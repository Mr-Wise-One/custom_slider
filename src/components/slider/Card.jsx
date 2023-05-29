import React, { useState, useEffect } from 'react';

const Card = ({
  infinite,
  width = '150px',
  height = '150px',
  gap = 0,
  transition = '0ms',
  cardIndex,
  step,
  indexArr,
  children,
}) => {
  const [position, setPosition] = useState(cardIndex);

  useEffect(() => {
    if (infinite) {
      const firstEl = indexArr[0];
      const lastEl = indexArr[indexArr.length - 1];

      if (step < 0) {
        if (position > firstEl) {
          setPosition(position - 1);
        } else {
          setPosition(lastEl);
        }
      } else if (step > 0) {
        if (position < lastEl) {
          setPosition(position + 1);
        } else {
          setPosition(firstEl);
        }
      }
    } else {
      if (step < 0) {
        setPosition(position - 1);
      }
      if (step > 0) {
        setPosition(position + 1);
      }
    }
  }, [step]);

  return (
    <>
      {infinite ? (
        <div
          className='absolute top-0 left-0 flex items-center justify-center'
          style={{
            width: width,
            height: height,
            transform: `translateX(calc(${position * 100}% + ${
              position * parseInt(gap) + 'px'
            }))`,
            transition: transition,
            opacity: `${
              position === indexArr[0] ||
              position === indexArr[indexArr.length - 1]
                ? 0
                : 1
            }`,
          }}
        >
          <div className='relative w-full h-full'>{children}</div>
        </div>
      ) : (
        <div
          className='absolute top-0 left-0 flex items-center justify-center w-[150px] h-[150px]'
          style={{
            width: width,
            height: height,
            transform: `translateX(calc(${position * 100}% + ${
              position * parseInt(gap) + 'px'
            }))`,
            transition: transition,
          }}
        >
          <div className='relative w-full h-full'>{children}</div>
        </div>
      )}
    </>
  );
};

export default Card;
