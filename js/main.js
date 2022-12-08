const a = 8

$('.btn').click(() => {
  if ($('.title').hasClass('color-red')) {
    $('.title').removeClass('color-red')
  } else {
    $('.title').hide(1000)
    $('.title').addClass('color-red')
  }
})
