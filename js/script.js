$('.news__slider').slick({
    infinite: true,
    dots: true,
    arrows: false
});
$(document).ready(function() {
    $('.info__card-head').on('click', f_acc);
  });  
  function f_acc(){
    $('.info__card-body').not($(this).next()).slideUp(100);
      $(this).next().slideToggle(100);
}