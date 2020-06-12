import { tns } from 'tiny-slider/src/tiny-slider';
const slider = tns({
  container: '.list',
  controls: false,
  items: 3,
  mouseDrag: true,
  slideBy: 'page',
  loop: false,
  responsive: {
    '350': {
      items: 1,
    },
    '500': {
      items: 2,
    },
    '750': {
      items: 3.3,
    },
    '1000': {
      items: 5,
    },
    '1050': {
      items: 5.3,
    },
  },
  swipeAngle: false,
  speed: 400,
  autoWidth: true,
  nav: false,
});
