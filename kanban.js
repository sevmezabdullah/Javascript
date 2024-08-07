// DOM  - Document Object Model
// LocalStorage kullanarak kanban yapısı oluşturmak
document.getElementById('addTaskBtn').addEventListener('click', addTask);


let taskIdCounter = 0

function addTask() {
    const taskInput = document.getElementById('taskInput')
    const taskText = taskInput.value.trim();

    console.log("🚀 ~ file: kanban.js:12 ~ addTask ~ taskText:", taskText)

    if (taskText === '') {
        alert('Please enter a task')
        return;
    }

    const task = document.createElement('div')
    task.classList.add('task')
    task.setAttribute('draggable', 'true')
    task.setAttribute('id', 'task-' + taskIdCounter++)
    task.innerHTML = `
    <span>${taskText}</span>
     <div class="actions">
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    document.getElementById('todo').appendChild(task)

    taskInput.value = ''
    addDragAndDropListeners(task)
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const newTaskText = prompt('Edit task:', task.querySelector('span').textContent)

    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.querySelector('span').textContent = newTaskText.trim();
    }
}


function deleteTask(button) {
    const task = button.parentElement.parentElement;

    console.log("🚀 ~ file: kanban.js:48 ~ deleteTask ~ task:", task)
    task.remove();
}


function addDragAndDropListeners(task) {

    console.log("🚀 ~ file: kanban.js:53 ~ addDragAndDropListeners ~ task:", task)
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

function dragStart(event) {

    console.log("🚀 ~ file: kanban.js:58 ~ dragStart ~ event:", event)
    event.dataTransfer.setData('text/plain', event.target.id);

    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragEnd(event) {

    console.log("🚀 ~ file: kanban.js:66 ~ dragEnd ~ event:", event)
    event.target.classList.remove('hide');
}


const columns = document.querySelectorAll('.kanban-column');

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', drop)
});

function dragOver(event) {

    console.log("🚀 ~ file: kanban.js:80 ~ dragOver ~ event:", event)
    event.preventDefault();
}

function dragEnter(event) {

    console.log("🚀 ~ file: kanban.js:84 ~ dragEnter ~ event:", event)
    event.preventDefault();
    if (event.target.classList.contains('kanban-column')) {
        event.target.classList.add('over');
    }
}

function dragLeave(event) {
    if (event.target.classList.contains('kanban-column')) {
        event.target.classList.remove('over');
    }
}

function drop(event) {
    event.preventDefault();
    const id = event.dataTransfer.getData('text/plain');
    const draggable = document.getElementById("task");
    if (event.target.classList.contains('kanban-column')) {
        event.target.classList.remove('over');
        event.target.appendChild(draggable);
    }

}
