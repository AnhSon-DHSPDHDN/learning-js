const keyLocalTaskList = 'k_t_l'
const taskLists = localStorage.getItem(keyLocalTaskList)
  ? JSON.parse(localStorage.getItem(keyLocalTaskList))
  : [];
const eleInputTaskName = document.querySelector('#task-name')
const eleInputTaskDes = document.querySelector('#task-des')
const eleInputPriority = document.querySelector('#task-priority')
const eleBodyTaskList = document.querySelector('.js-body-tasklist')
const eleBtnSubmit = document.querySelector('.js-submit-form');
const eleBtnReset = document.querySelector('.js-btn-reset');
const eleLeftForm = document.querySelector('.js-left-form');

const handleAddTask = () => {
  const task = {
    id: new Date().getTime(),
    taskName: eleInputTaskName.value,
    taskDescription: eleInputTaskDes.value,
    taskPriority: eleInputPriority.value,
    createAt: new Date(),
    isDone: false,
  }

  taskLists.push(task);
  localStorage.setItem(keyLocalTaskList, JSON.stringify(taskLists))
  handleReRenderTaskList()
  handleResetForm()
}

const handleResetForm = (event) => {
  !!event && event.preventDefault()
  eleLeftForm.reset()
}

const handleMakeDoneTask = () => {

}

const handleDeleteTask = () => {

}

const handleReRenderTaskList = () => {
  let html = ''
  taskLists.forEach(task => {
    html += `
      <tr class="${task.isDone ? 'done-task' : ''}">
        <td>${task.taskName}</td>
        <td>${task.createAt}</td>
        <td>${task.taskDescription}</td>
        <td>${task.taskPriority}</td>
        <td>
          <button>Done</button>
          <button>Del</button>
        </td>
      </tr>
    `
  })

  eleBodyTaskList.innerHTML = html
}

function main() {
  handleReRenderTaskList()
  eleBtnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
    handleAddTask()
  })

  eleBtnReset.addEventListener('click', handleResetForm)
}

main()
