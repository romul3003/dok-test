import $ from 'jquery'

const $favorite = $('.product__favorite')

$favorite.on('click', (event) => {
  $(event.currentTarget).toggleClass('product__favorite--full')
})
