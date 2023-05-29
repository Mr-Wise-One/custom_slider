import React from 'react';

const Carousel = (props) => {
  const { step, children: cards } = props;

  // const arr = React.Children.map(cards, (child, index) =>
  //   child.type.name === 'Card'
  //     ? React.cloneElement(child, { cardIndex: index, step: step })
  //     : null
  // );

  const arr = React.Children.map(cards, (child, index) =>
    React.cloneElement(child, { cardIndex: index, step: step })
  );

  return <div>{arr}</div>;
};

export default Carousel;
