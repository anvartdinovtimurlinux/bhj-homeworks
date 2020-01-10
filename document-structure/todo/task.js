'use strict';

function addTask(taskText) {
  const task = document.createElement('div')
  task.className = 'task';
  task.innerHTML = `
    <div class="task__title">
      ${taskText}
    </div>
    <a href="#" class="task__remove">&times;</a>
  `;
  tasksList.append(task);
  
  const task__remove = task.querySelector('a');
  task__remove.addEventListener('click', () => {
    task.remove();
  })
}

const tasksList = document.getElementById('tasks__list');

const taskInput = document.getElementById('task__input');
taskInput.addEventListener('keydown', (event) => {
  if (event.keyCode === 13 && taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

const taskAdd = document.getElementById('tasks__add');
taskAdd.addEventListener('click', (event) => {
  if (taskInput.value) {
    addTask(taskInput.value);
    taskInput.value = '';
  }
});

