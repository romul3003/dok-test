import $ from 'jquery'
import 'slick-carousel/slick/slick'

const $slider = $('.slider')
const $randomSlider = $('.random-slider')

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

$.fn.randomize = function (selector) {
  let $elems = selector ? $(this).find(selector) : $(this).children(),
    $parents = $elems.parent()

  $parents.each(function () {
    $(this).children(selector).sort(function (childA, childB) {
      // * Prevent last slide from being reordered
      if($(childB).index() !== $(this).children(selector).length - 1) {
        return Math.round(Math.random()) - 0.5
      }
    }.bind(this)).detach().appendTo(this)
  })

  return this
}

$slider.slick(slickSettings)
$randomSlider.randomize().slick(slickSettings)
