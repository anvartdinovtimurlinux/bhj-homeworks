'use strict';

function transformTimer(timer) {
  return new Date(timer - 3 * 3600000).toLocaleTimeString('en-US', {
    hour: 'numeric',
    hour12: false,
    minute: 'numeric',
    second: 'numeric',
  })
}

function reduceTimer() {
  if (currentTimer === 0) {
    alert('Вы победили в конкурсе');
    clearInterval(timer);
  } else {
    currentTimer -= 1000;
    console.log(currentTimer);
    timerField.textContent = transformTimer(currentTimer);
  }
}

const timerField = document.getElementById('timer');
const [hh, mm, ss] = timerField.innerText.split(':').map(Number);
let currentTimer = (hh * 3600 + mm * 60 + ss) * 1000;

const timer = setInterval(reduceTimer, 1000);
