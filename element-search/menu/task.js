'use strict';

const menus = Array.from(document.querySelectorAll('body > .menu'));
menus.forEach((menu) => {
  const menuLinks = Array.from(menu.querySelectorAll('.menu__link'));
  menuLinks.forEach((item) => {
    item.onclick = (event) => {
      const menuActive = menu.querySelector('.menu_active');
      if (menuActive) {
        menuActive.classList.remove('menu_active');
      }

      const subMenu = item.nextSibling.nextSibling;
      if (subMenu) {
        subMenu.classList.add('menu_active');
        event.preventDefault();
      }
    };
  });
});
