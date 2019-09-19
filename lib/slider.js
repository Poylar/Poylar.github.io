"use strict";

document.addEventListener('DOMContentLoaded', function () {
  var sliderLength = document.getElementsByClassName('slider-content_item').length;
  var slideItem = document.querySelectorAll('.slider-content_item');
  var currentSlide = 1;
  var sliderSpeed = 2000;
  var slideTimer = setInterval(function () {
    return nextSlide();
  }, sliderSpeed);
  var slideWidth = slideItem[0].offsetWidth;

  function nextSlide() {
    if (currentSlide >= sliderLength - 5) {
      slideItem.forEach(function (slideItem) {
        slideItem.style.transform = 'translate(0px)';
        currentSlide = 1;
      });
    } else {
      slideItem.forEach(function (slideItem) {
        slideItem.style.transform = "translate( ".concat(-slideWidth * currentSlide, "px)");
      });
      currentSlide++;
    }
  }
});