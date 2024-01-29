import './swiper.js';
let swiperCustomer;
let swiperGallery

const initSwiper = () => {
  swiperCustomer = new Swiper('.customer-review__slider', {
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    navigation: {
      nextEl: '.customer-review__slider-button--next',
      prevEl: '.customer-review__slider-button--prev',
    },
    pagination: {
      el: '.customer-review__slider-pagination',
      clickable: true,
    },
  });
};

initSwiper();
