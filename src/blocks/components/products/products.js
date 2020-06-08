import $ from 'jquery'
import 'slick-carousel/slick/slick'

const $slider = $('.slider')

// $slider.on('init', (event, slick) => {
//   console.log(slick)
// })
//
// $slider.on('afterChange', () => {
//
// })

const slickSettings = {
  arrows: true,
  dots: false,
  mobileFirst: true,
  infinite: false,
  slidesToShow: 3,
  accessibility: false,
  responsive: [
    {
      breakpoint: 320,
      settings: {
        arrows: false,
        variableWidth: true,
      }
    },
    {
      breakpoint: 576,
      settings: {
        arrows: false,
        variableWidth: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
      }
    },
  ]
}

$slider.slick(slickSettings)
