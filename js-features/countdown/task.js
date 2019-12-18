'use strict';

const timerField = document.getElementById('timer');

function reduceTimer() {
  if (timerField.textContent == 0) {
    alert('Вы победили в конкурсе');
    clearInterval(timer);
  } else {
    timerField.textContent -= 1;
  }
}

const timer = setInterval(reduceTimer, 1000);
