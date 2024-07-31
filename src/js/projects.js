import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';
import { Navigation, Keyboard } from 'swiper/modules';

const buttPrev = document.querySelector('.js-prevPr');
const buttNext = document.querySelector('.js-nextPr');

export function addSwiperProj() {
  const swiperProjects = new Swiper('.swiper-projects', {
    // Optional parameters
    modules: [Navigation, Keyboard],
    speed: 500,
    spaceBetween: 5,
    grabCursor: true,
    allowTouchMove: true,
    direction: 'horizontal',
    watchOverflow: true,

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  });

  buttNext.addEventListener('click', nextSlide);
  buttPrev.addEventListener('click', prevSlide);

  function nextSlide() {
    swiperProjects.slideNext();
    if (swiperProjects.activeIndex === 2) {
      buttNext.classList.add('is-dark');
    } else {
      buttNext.classList.remove('is-dark');
    }
    buttPrev.classList.remove('is-dark');
  }

  function prevSlide() {
    swiperProjects.slidePrev();
    if (swiperProjects.activeIndex === 0) {
      buttPrev.classList.add('is-dark');
    } else {
      buttPrev.classList.remove('is-dark');
    }
    buttNext.classList.remove('is-dark');
  }
}
