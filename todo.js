document.getElementById('addTaskBtn').addEventListener('click', addTask);

let taskIdCounter = 0;

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const task = document.createElement('div');
    task.classList.add('task');
    task.setAttribute('draggable', 'true');
    task.setAttribute('id', 'task-' + taskIdCounter++);
    task.innerHTML = `
        <span>${taskText}</span>
        <div class="actions">
            <button onclick="editTask(this)">✏️</button>
            <button onclick="deleteTask(this)">❌</button>
        </div>
    `;

    document.getElementById('todo').appendChild(task);
    taskInput.value = '';

    addDragAndDropListeners(task);
}

function editTask(button) {
    const task = button.parentElement.parentElement;
    const newTaskText = prompt('Edit task:', task.querySelector('span').textContent);

    if (newTaskText !== null && newTaskText.trim() !== '') {
        task.querySelector('span').textContent = newTaskText.trim();
    }
}

function deleteTask(button) {
    const task = button.parentElement.parentElement;
    task.remove();
}

function addDragAndDropListeners(task) {
    task.addEventListener('dragstart', dragStart);
    task.addEventListener('dragend', dragEnd);
}

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
    setTimeout(() => {
        event.target.classList.add('hide');
    }, 0);
}

function dragEnd(event) {
    event.target.classList.remove('hide');
}

const columns = document.querySelectorAll('.kanban-column');

columns.forEach(column => {
    column.addEventListener('dragover', dragOver);
    column.addEventListener('dragenter', dragEnter);
    column.addEventListener('dragleave', dragLeave);
    column.addEventListener('drop', drop);
});

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
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
    const draggable = document.getElementById(id);

    if (event.target.classList.contains('kanban-column')) {
        event.target.classList.remove('over');
        event.target.appendChild(draggable);
    }
}
