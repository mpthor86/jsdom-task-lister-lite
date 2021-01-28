document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const newTask = document.getElementById('new-task-description')
  const form = document.getElementById('create-task-form')
  const taskBtn = document.getElementById('new-task-btn')
  const list = document.getElementById('tasks')

  document.addEventListener('click', handleClick)

  function handleClick(e) {
    if(e.target.id === 'new-task-btn') {
      addTask(e)
    }else if(e.target.id === 'delete') {
      removeTask(e)
    }
  }

  function addTask(e) {
    e.preventDefault()
    let task = newTask.value
    list.innerHTML += `<li id="new-task">${task} <button id="delete">Remove Task</button></li>`
  }

  function removeTask(e) {
    e.preventDefault()
    let task = document.getElementById('new-task')
    task.remove()
  }

});
