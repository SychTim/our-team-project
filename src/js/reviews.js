import axios from 'axios';
import Swiper from 'swiper/bundle';
// import 'swiper/css/bundle';

let reviews = [];
let swiperInstance;

export const fetchReviews = async () => {
  try {
    const response = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    if (response.status !== 200) {
      throw new Error('Failed to fetch reviews');
    }
    return response.data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const loadReviews = () => {
  const swiperWrapper = document.querySelector(
    '.reviews-swiper .swiper-wrapper'
  );

  const reviewsHtml = reviews
    .map(
      review =>
        `<div class="swiper-slide">
      <ul class="review-cards">
        <li class="photo">
          <img src="${review.avatar_url}" alt="${review.author}" />
        </li>
        <div class="description">
          <li class="name">${review.author}</li>
          <li class="review">${review.review}</li>
        </div>
      </ul>
    </div>`
    )
    .join('');

  swiperWrapper.innerHTML = reviewsHtml;

  if (swiperInstance) {
    swiperInstance.update();
  } else {
    swiperInstance = new Swiper('.reviews-swiper', {
      navigation: {
        nextEl: '.reviews-button-right',
        prevEl: '.reviews-button-left',
      },
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 16,
      breakpoints: {
        375: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
      loop: false,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      on: {
        reachEnd: () => {
          document.querySelector('.reviews-button-right').disabled = true;
          document
            .querySelector('.reviews-button-right')
            .setAttribute('aria-disabled', 'true');
        },
        reachBeginning: () => {
          document.querySelector('.reviews-button-left').disabled = true;
          document
            .querySelector('.reviews-button-left')
            .setAttribute('aria-disabled', 'true');
        },
        fromEdge: () => {
          document.querySelector('.reviews-button-right').disabled = false;
          document
            .querySelector('.reviews-button-right')
            .setAttribute('aria-disabled', 'false');
          document.querySelector('.reviews-button-left').disabled = false;
          document
            .querySelector('.reviews-button-left')
            .setAttribute('aria-disabled', 'false');
        },
      },
    });
  }
};

export const initSwiper = async () => {
  reviews = await fetchReviews();
  loadReviews();
  updateButtonStates();
};

export const updateButtonStates = () => {
  const buttonLeft = document.querySelector('.reviews-button-left');
  const buttonRight = document.querySelector('.reviews-button-right');

  buttonLeft.disabled = swiperInstance.isBeginning;
  buttonRight.disabled = swiperInstance.isEnd;

  buttonLeft.setAttribute('aria-disabled', buttonLeft.disabled);
  buttonRight.setAttribute('aria-disabled', buttonRight.disabled);
};
