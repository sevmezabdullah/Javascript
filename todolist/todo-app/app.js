document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3001/todos';
    const todoList = document.getElementById('todo-list');
    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');

    // Fetch todos from JSON-Server
    const fetchTodos = async () => {
        const response = await fetch(apiUrl);
        const todos = await response.json();
        todoList.innerHTML = '';
        todos.forEach((todo) => addTodoToDOM(todo));
    };

    // Add a new todo
    const addTodo = async () => {
        const title = newTodoInput.value.trim();
        if (!title) return;

        const newTodo = {
            title,
            completed: false,
        };

        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTodo),
        });

        const todo = await response.json();
        addTodoToDOM(todo);
        newTodoInput.value = '';
    };

    // Toggle todo completion
    const toggleTodo = async (id, completed) => {
        const response = await fetch(`${apiUrl}/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ completed: !completed }),
        });

        const updatedTodo = await response.json();
        updateTodoInDOM(updatedTodo);
    };


    // Delete a todo
    const deleteTodo = async (id) => {
        await fetch(`${apiUrl}/${id}`, {
            method: 'DELETE',
        });
        document.getElementById(`todo-${id}`).remove();
    };

    // Add a todo to the DOM
    const addTodoToDOM = (todo) => {
        const li = document.createElement('li');
        li.id = `todo-${todo.id}`;
        li.innerHTML = `
        <span
          style="text-decoration: ${todo.completed ? 'line-through' : 'none'}; cursor: pointer;"
          onclick="toggleTodo(${todo.id}, ${todo.completed})"
        >
          ${todo.title}
        </span>
        <button onclick="deleteTodo(${todo.id})">Sil</button>
      `;
        todoList.appendChild(li);
    };

    // Update a todo in the DOM
    const updateTodoInDOM = (todo) => {
        console.info("Update")
        const todoItem = document.getElementById(`todo-${todo.id}`);
        if (todoItem) {
            const span = todoItem.querySelector('span');
            span.style.textDecoration = todo.completed ? 'line-through' : 'none';
            span.setAttribute('onclick', `toggleTodo(${todo.id}, ${todo.completed})`);
        }
    };

    // Event listeners
    addTodoButton.addEventListener('click', addTodo);

    // Initialize
    fetchTodos();
});

// Expose functions to window for inline event handlers
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;
