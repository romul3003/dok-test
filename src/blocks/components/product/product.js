import $ from 'jquery'

const $favorite = $('.product__favorite')

$favorite.on('click', (event) => {
  $(event.currentTarget).removeClass('product__favorite--empty')
  $(event.currentTarget).addClass('product__favorite--full')
})
