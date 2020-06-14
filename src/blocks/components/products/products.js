import Swiper from 'swiper'

function shuffle(array) {
  array.sort(() => Math.random() - 0.5)
}

const randomSliderWrapper = document.querySelector('.random-slider > .swiper-wrapper')
const elems = Array.from(randomSliderWrapper.querySelectorAll('.product'))
shuffle(elems)
randomSliderWrapper.append(...elems)

function navigation(btmName) {
  return {
    prevEl: `${btmName}.swiper-button-prev`,
    nextEl: `${btmName}.swiper-button-next`,
  }
}

const swiperSettings = {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 20,
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
  new Swiper('.slider', { ...swiperSettings, navigation: navigation('.swiper-button') })
  new Swiper('.random-slider', { ...swiperSettings, navigation: navigation('.randomSwiper-button') })
}

enableSwiper()
