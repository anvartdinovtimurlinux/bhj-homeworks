'use strict';

const btnPrevious = document.querySelector('.slider__arrow_prev');
const btnNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(document.querySelectorAll('.slider__item'));
let currentSlide = 0;

const changeSlide = (direction) => () =>{
  slides[currentSlide].classList.remove('slider__item_active');

  currentSlide += direction;
  currentSlide = currentSlide === slides.length ? 0 : currentSlide;
  currentSlide = currentSlide === -1 ? slides.length - 1 : currentSlide;
  
  slides[currentSlide].classList.add('slider__item_active');
};

const nextSlide = changeSlide(1);
const previousSlide = changeSlide(-1);

btnNext.onclick = nextSlide;
btnPrevious.onclick = previousSlide;