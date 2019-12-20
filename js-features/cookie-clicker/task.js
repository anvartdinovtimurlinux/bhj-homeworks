'use strict';

const cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');
let cpsCounter = document.getElementById('CpS__counter');
let zeroDate;
let currentDate;

cookie.onclick = function() {
  cookie.width = cookie.width === '200' ? '250' : '200';
  cookie.height = cookie.height === '128' ? '160' : '128';

  if (clickerCounter.innerText === '0') {
    zeroDate = new Date();
  } else {
    currentDate = new Date();
    cpsCounter.innerText = ((1000 * clickerCounter.innerText) / (currentDate - zeroDate)).toFixed(3);
  }
  clickerCounter.innerText = Number(clickerCounter.innerText) + 1;

};