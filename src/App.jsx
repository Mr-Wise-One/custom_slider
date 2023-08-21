import { useState, useEffect } from 'react';
import { useScreenSize } from './custom-hooks';
import BarLoader from 'react-spinners/BarLoader';
import {
  Slider,
  Card,
  VideoBackground,
  CardAnimation,
  AnimatedTitle,
} from './components';
import { imgArr, slideSize, phoneImg, bgVideo } from './constants';

const { xl, l, sm, xsm, mobile } = slideSize;

function App() {
  const [screenPosition, setScreenPosition] = useState(false);

  const screenSize = useScreenSize();
  useEffect(() => {
    screenSize.width > screenSize.height
      ? setScreenPosition(true)
      : setScreenPosition(false);
  }, [screenSize.width]);

  return !screenPosition ? (
    <div className='bg-black w-full h-screen flex flex-col items-center justify-center'>
      <img src={phoneImg} alt='rotate-screen' className='-mt-10 w-80 h-80' />
      <p className='mt-10 text-white'>ROTATE YOUR SCREEN</p>
    </div>
  ) : (
    <MySlider />
  );
}

const MySlider = () => {
  const [loading, setLoading] = useState(true);
  const [removeLoader, setRemoveLoader] = useState(false);
  const [slideProps, setSlideProps] = useState(xl);

  const screenSize = useScreenSize();

  useEffect(() => {
    screenSize.width <= 896
      ? setSlideProps(mobile)
      : screenSize.width <= 1080 && screenSize.height <= 480
      ? setSlideProps(xsm)
      : screenSize.width < 1600
      ? setSlideProps(sm)
      : screenSize.width < 1920
      ? setSlideProps(l)
      : setSlideProps(xl);
  }, [screenSize.width]);

  useEffect(() => {
    const firstTimer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    if (!loading) {
      const secondTimer = setTimeout(() => {
        setRemoveLoader(true);
      }, 1000);
      return () => {
        clearTimeout(secondTimer);
      };
    }

    return () => {
      clearTimeout(firstTimer);
    };
  }, [loading]);

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className='absolute top-0 left-0 bg-black w-full h-screen flex flex-col items-center justify-center'
        style={{
          transform: `translateX(${!loading ? '-100%' : '0'})`,
          transition: '1000ms',
          display: removeLoader ? 'none' : 'flex',
        }}
      >
        <BarLoader color={'#36d7b7'} height={20} width={300} />
        <p className='text-white mt-4'>LOADING...</p>
      </div>

      <div
        className='absolute top-0 left-0 z-0 w-full h-screen flex items-center justify-center'
        style={{
          transform: `translateX(${!loading ? '0' : '100%'})`,
          transition: '1000ms',
        }}
      >
        <AnimatedTitle text='INFINITE SLIDER' />
        <VideoBackground src={bgVideo} />
        <Slider infinite inView={3} checkInView={slideProps}>
          {imgArr.map((slide) => {
            const { id, img } = slide;
            return (
              <Card key={id} {...slideProps}>
                <CardAnimation />
                <img
                  src={img}
                  alt='slide'
                  className='absolute top-0 left-0 w-full h-full opacity-80'
                />
              </Card>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default App;
