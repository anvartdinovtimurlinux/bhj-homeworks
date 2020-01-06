'use strict';

const fontSizeControls = document.querySelectorAll('.font-size');
fontSizeControls.forEach(control => {
  control.addEventListener('click', (event) => {
    event.preventDefault();

    document.querySelector('.font-size_active').classList.remove('font-size_active');

    control.classList.add('font-size_active');

    const fontSize = control.dataset.size;
    document.querySelector('.book').className = fontSize
      ? `book book_fs-${fontSize}`
      : `book`;
  });
});