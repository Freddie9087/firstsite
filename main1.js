$(document).ready(() => {
  $('.facebook').on('mouseenter', () => {
    $('.facebook').addClass('facebook1');
  })

  $('.facebook').on('mouseleave', () => {
    $('.facebook').removeClass('facebook1');
  })

  $('.instagram').on('mouseenter', () => {
    $('.instagram').addClass('instagram1');
  })

  $('.instagram').on('mouseleave', () => {
    $('.instagram').removeClass('instagram1');
  })


  $('.snapchat').on('mouseenter', () => {
    $('.snapchat').addClass('snapchat1');
  })

  $('.snapchat').on('mouseleave', () => {
    $('.snapchat').removeClass('snapchat1');
  })


  $('.twitter').on('mouseenter', () => {
    $('.twitter').addClass('twitter1');
  })

  $('.twitter').on('mouseleave', () => {
    $('.twitter').removeClass('twitter1');
  })

});