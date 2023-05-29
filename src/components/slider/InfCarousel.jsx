import React from 'react';

const InfCarousel = (props) => {
  const { step, infinite, children: cards } = props;

  // const arr = React.Children.map(cards, (child, index) =>
  //   child.type.name === 'Card'
  //     ? React.cloneElement(child, { cardIndex: index })
  //     : null
  // );

  const arr = React.Children.map(cards, (child, index) =>
    React.cloneElement(child, { cardIndex: index })
  );

  const arrPart_1 = React.Children.map(arr, (child, index) =>
    index < Math.ceil(arr.length / 2) && arr.length > 1
      ? React.cloneElement(child, {
          key: child.key + '-clone',
          cardIndex: index + arr.length,
        })
      : arr.length === 1
      ? React.cloneElement(child, {
          key: child.key + '-clone-1',
          cardIndex: index + arr.length,
        })
      : null
  );

  const arrPart_2 = React.Children.map(arr, (child, index) =>
    index >= Math.ceil(arr.length / 2) && arr.length > 1
      ? React.cloneElement(child, {
          key: child.key + '-clone',
          cardIndex: index - arr.length,
        })
      : arr.length === 1
      ? React.cloneElement(child, {
          key: child.key + '-clone-2',
          cardIndex: index - arr.length,
        })
      : null
  );

  const modifiedArr = arrPart_2.concat(arr, arrPart_1);
  const indexArr = modifiedArr.map((child) => child.props.cardIndex);

  const arrInf = React.Children.map(modifiedArr, (child) =>
    React.cloneElement(child, {
      indexArr: indexArr,
      step: step,
      infinite: infinite,
    })
  );

  return <div>{arrInf}</div>;
};

export default InfCarousel;
