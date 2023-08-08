const swiper = new Swiper('.reviews__swiper', {
  // Optional parameters
  slidesPerView: 3,
  slidesPerGroup: 1,
  spaceBetween: 60,

  // If we need pagination
  pagination: {
    el: '.reviews__swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper__button-next',
    prevEl: '.reviews-swiper__button-prev',
  },
});

const hamburger = document.querySelector('.hamb');
const menu = document.querySelector('.header-nav__menu');

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('hamb--active');
  menu.classList.toggle('header-nav__menu--active');
})