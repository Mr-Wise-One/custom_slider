import phoneImg from '../assets/phone.png';

const imgArr = [
  {
    id: '1-slide-img',
    img: 'https://moewalls.com/wp-content/uploads/2023/03/twin-black-cats-watching-the-cyberpunk-city-thumb-364x205.jpg',
  },
  {
    id: '2-slide-img',
    img: 'https://moewalls.com/wp-content/uploads/2023/01/cyberpunk-neon-street-thumb-364x205.jpg',
  },
  {
    id: '3-slide-img',
    img: 'https://moewalls.com/wp-content/uploads/2022/12/parallel-cyberspace-thumb-364x205.jpg',
  },
  {
    id: '4-slide-img',
    img: 'https://moewalls.com/wp-content/uploads/2022/10/netwatcher-thumb-364x205.jpg',
  },
  {
    id: '5-slide-img',
    img: 'https://moewalls.com/wp-content/uploads/2022/08/cyberpunk-citadel-thumb-364x205.jpg',
  },
];

const slideSize = {
  xl: {
    width: '220px',
    height: '160px',
    gap: 15,
    transition: '300ms',
  },
  l: {
    width: '180px',
    height: '110px',
    gap: 15,
    transition: '300ms',
  },
  sm: {
    width: '160px',
    height: '110px',
    gap: 15,
    transition: '300ms',
  },
  xsm: {
    width: '110px',
    height: '80px',
    gap: 15,
    transition: '300ms',
  },
  mobile: {
    width: '85px',
    height: '60px',
    gap: 15,
    transition: '300ms',
  },
};

export { imgArr, slideSize, phoneImg };
