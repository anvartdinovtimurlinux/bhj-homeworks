'use strict';

function getHole(i) {
  return document.getElementById(`hole${i}`);
}

function reset() {
  dead.innerText = 0;
  lost.innerText = 0;
}

function clickOnHole() {
  if (this.className.includes( 'hole_has-mole' )) {
    dead.innerText = +dead.innerText + 1;
    if (dead.innerText == 10) {
      alert('Победа!');
      reset();
    }
  } else {
    lost.innerText = +lost.innerText + 1;
    if (lost.innerText == 5) {
      alert('Поражение :(');
      reset();
    }
  }
}

const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const holes = [];
for (let i = 1; i <= 9; i += 1) {
  const hole = getHole(i);
  hole.onclick = clickOnHole;
  holes.push(hole);
}





console.log(holes);