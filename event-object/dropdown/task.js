'use strict';

console.log('start');

const lists = document.querySelectorAll('.dropdown');
lists.forEach(list => {
  const dropdownValue = list.querySelector('.dropdown__value');
  const dropdownList = list.querySelector('.dropdown__list');

  dropdownValue.addEventListener('click', () => {
    dropdownList.classList.toggle('dropdown__list_active');
  });

  const links = dropdownList.querySelectorAll('.dropdown__link');
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      dropdownValue.textContent = link.textContent.trim();
      dropdownList.classList.remove('dropdown__list_active');
    });
  });
});