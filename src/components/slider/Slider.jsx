import React, { useEffect, useState } from 'react';
import { BiRightArrow, BiLeftArrow } from 'react-icons/bi';

import { useScreenSize } from '../../custom-hooks';

import { InfCarousel, Carousel, ButtonWrapper } from '../../components';

const Slider = (props) => {
  const {
    infinite = false,
    inView = 1,
    checkInView,
    leftButton = <BiLeftArrow />,
    rightButton = <BiRightArrow />,
    children: cards,
  } = props;
  const [cardProps, setCardProps] = useState({});
  const [isArr, setIsArr] = useState(cards ? true : false);
  const [view, setView] = useState(inView);

  const screenSize = useScreenSize();

  useEffect(() => {
    if (isArr) {
      setCardProps(cards[0].props);
      if (inView > cards.length) setView(cards.length);
    }
  }, [checkInView]);

  const {
    width: width = '150px',
    height: height = '150px',
    gap: gap = 0,
  } = cardProps;

  const [step, setStep] = useState(0);

  const handleLeftButtonClick = () => {
    if (infinite) {
      if (step < 0) setStep(1);
      setStep((prev) => (prev < cards.length * 2 ? prev + 1 : cards.length));
    } else {
      if (step === -cards.length + view) {
        setStep(0);
      }
      setStep((prev) => (prev < cards.length - view ? prev + 1 : prev));
    }
  };

  const handleRightButtonClick = () => {
    if (infinite) {
      if (step > 0) setStep(-1);
      setStep((prev) => (prev > -cards.length * 2 ? prev - 1 : -cards.length));
    } else {
      if (step === cards.length - view) {
        setStep(0);
      }
      setStep((prev) => (prev > -cards.length + view ? prev - 1 : prev));
    }
  };

  return isArr ? (
    <div
      className='relative z-50'
      style={{
        margin: `${
          screenSize.width <= 896
            ? '-80px -35px 0 0'
            : screenSize.width <= 1080 && screenSize.height <= 480
            ? '-100px -50px 0 0'
            : '-100px -100px 0 0'
        }`,
      }}
    >
      <ButtonWrapper left handleOnClick={handleLeftButtonClick}>
        {leftButton}
      </ButtonWrapper>
      <ButtonWrapper right handleOnClick={handleRightButtonClick}>
        {rightButton}
      </ButtonWrapper>
      <div
        className='overflow-hidden relative z-20'
        style={{
          width: `calc(${
            parseInt(width) * view + width.replace(parseInt(width), '')
          } + ${parseInt(gap) * (view - 1) + 'px'} )`,
          height: parseInt(height) + height.replace(parseInt(height), ''),
        }}
      >
        {infinite ? (
          <InfCarousel step={step} infinite={infinite}>
            {cards}
          </InfCarousel>
        ) : (
          <Carousel step={step}>{cards}</Carousel>
        )}
      </div>
    </div>
  ) : null;
};

export default Slider;
