document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function addTask(event) {
    let newTaskText = document.getElementById('new-task-description').value;
    let taskList = document.getElementById('list')
    let newTaskItem = document.createElement('li');
    newTaskItem.innerText = newTaskText
    taskList.append(newTaskItem);
    let background = document.getElementById("main-content").style.backgroundColor = getRandomColor()
    event.preventDefault();
  }


  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', addTask)


function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
});
