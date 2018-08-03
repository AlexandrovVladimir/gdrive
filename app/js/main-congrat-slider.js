(function() {
  $('.congratulation-list').slick({
    vertical: true,
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<span class="slick-next"><img src="img/congrat-arrow-top.png" alt="arrow top"></span>',
    nextArrow: '<span class="slick-prev"><img src="img/congrat-arrow-bottom.png" alt="arrow bottom"></span>'
  });
})();