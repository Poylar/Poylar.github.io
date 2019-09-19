document.addEventListener('DOMContentLoaded', () => {
  let sliderLength = document.getElementsByClassName('slider-content_item').length;
  let slideItem = document.querySelectorAll('.slider-content_item');
  let currentSlide = 1;
  let sliderSpeed = 2000;
  let slideTimer = setInterval(() => nextSlide(), sliderSpeed);
  const slideWidth = slideItem[0].offsetWidth;
  function nextSlide() {
    if (currentSlide >= sliderLength - 5) {
      slideItem.forEach((slideItem) => {
        slideItem.style.transform = 'translate(0px)';
        currentSlide = 1
      })
    }
    else {
      slideItem.forEach((slideItem) => {
        slideItem.style.transform = `translate( ${(-slideWidth) * currentSlide}px)`;
      })
      currentSlide++
    }
  }
})