import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

const swiperProjects = new Swiper('.swiper-projects', {
  // Optional parameters
  modules: [Navigation, Keyboard],
  speed: 500,
  direction: 'horizontal',

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  //   keyboard: {
  //     enabled: true,
  //     onlyInViewport: true,
  //     pageUpDown: true,
  //   },
});

swiperProject();
