function nextImg() {
  var currentImg = $('.active');
  var nextImg = currentImg.next();

  if (nextImg.length) {
    currentImg.removeClass('active').css('z-index', -10);
    nextImg.addClass('active').css('z-index', 10);
  }
}

function prevImg() {
  var currentImg = $('.active');
  var prevImg = currentImg.prev();

  if (prevImg.length) {
    currentImg.removeClass('active').css('z-index', -10);
    prevImg.addClass('active').css('z-index', 10);
  }
}


$(document).ready(function() {
  $('.next').on('click', nextImg);
  $('.prev').on('click',prevImg);
});
