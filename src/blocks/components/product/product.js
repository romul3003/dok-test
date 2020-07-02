const carouselsWrap = document.querySelector('.carousels-wrap')
carouselsWrap.addEventListener('click', (event) => {
  const { target } = event

  if (!target.classList.contains('product__favorite')) {
    return
  }

  target.classList.toggle('product__favorite--full')
})
