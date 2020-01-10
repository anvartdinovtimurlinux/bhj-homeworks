'use strict';

const body = document.querySelector('body');
const linkWithTooltipList = document.querySelectorAll('a.has-tooltip');
let activeLinkWithTooltip;

linkWithTooltipList.forEach((link) =>{
  const toolTip = document.createElement('div');
  link.appendChild(toolTip);
  toolTip.outerHTML = `<div class="tooltip" style="position: absolute; left: 0.1em; top: 1.1em">${link.title}</div`;

  link.addEventListener('click', (event) => {
    event.preventDefault();
    const currentToolTip = link.querySelector('.tooltip');
    if (currentToolTip.classList.contains('tooltip_active')) {
      currentToolTip.classList.remove('tooltip_active');
      return
    }

    const activeToolTip = document.querySelector('.tooltip_active')
    if (activeToolTip) {
      activeToolTip.classList.remove('tooltip_active');
    }
    currentToolTip.classList.add('tooltip_active');
  });
});