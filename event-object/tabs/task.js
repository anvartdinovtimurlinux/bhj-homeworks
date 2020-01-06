'use strict';

const mainTabs = document.querySelectorAll('.tabs');

mainTabs.forEach(mainTab => {
  const tabs = mainTab.querySelectorAll('.tab');
  const tabsContent = mainTab.querySelectorAll('.tab__content');

  tabs.forEach((tab, index) => {
    tab.onclick = () => {
      mainTab.querySelector('.tab_active').classList.remove('tab_active');
      tab.classList.add('tab_active');

      mainTab.querySelector('.tab__content_active').classList.remove('tab__content_active');
      tabsContent[index].classList.add('tab__content_active');
    };
  });
});