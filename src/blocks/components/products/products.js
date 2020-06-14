import Swiper from 'swiper'

const swiperSettings = {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20,
  navigation: {
    prevEl: '.swiper-button.swiper-button-prev',
    nextEl: '.swiper-button.swiper-button-next',
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    1025: {
      spaceBetween: 20,
      freeMode: false,
    },
    1200: {
      freeMode: false,
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
}

function enableSwiper() {
  new Swiper('.slider', swiperSettings)
  new Swiper('.random-slider', swiperSettings)
}

enableSwiper()
