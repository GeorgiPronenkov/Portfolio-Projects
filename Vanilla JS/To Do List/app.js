//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

//event-listeners
document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

//functions
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //createToDo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');

    //create li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD ToDo to localStorage
    saveLocalTodos(todoInput.value);
    //check mark button
    const completedBtn = document.createElement('button');
    completedBtn.innerHTML = '<i class="fas fa-check"></i>';
    completedBtn.classList.add("complete-btn");
    todoDiv.appendChild(completedBtn);

    //check trash button
    const trashBtn = document.createElement('button');
    trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
    trashBtn.classList.add("trash-btn");
    todoDiv.appendChild(trashBtn);

    //append to list
    todoList.appendChild(todoDiv);
    //clear input value
    todoInput.value = '';
}

function deleteCheck(e) {
    const item = e.target;
    //DELETE todo
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }

    //check mark
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

//filter todos
function filterTodo(e) {
    const todos = todoList.childNodes;
    // console.log(todos)
    todos.forEach(function (todo) {
       switch (e.target.value) {
           case "all":
               todo.style.display = "flex";
               break;
           case "completed":
               if (todo.classList.contains('completed')) {
                   todo.style.display = "flex";
               } else {
                   todo.style.display = "none";
               }
               break;
           case "uncompleted":
               if (!todo.classList.contains('completed')) {
                   todo.style.display = "flex";
               } else {
                   todo.style.display = "none";
               }
               break;
       }
    });
}

//local storage:
function saveLocalTodos(todo) {
    //check if already exist
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []; //create an empty array
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    //check if already exist
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []; //create an empty array
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function (todo) {
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');

        //create li
        const newTodo = document.createElement('li');
        newTodo.innerText = todo;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //check mark button
        const completedBtn = document.createElement('button');
        completedBtn.innerHTML = '<i class="fas fa-check"></i>';
        completedBtn.classList.add("complete-btn");
        todoDiv.appendChild(completedBtn);

        //check trash button
        const trashBtn = document.createElement('button');
        trashBtn.innerHTML = '<i class="fas fa-trash"></i>';
        trashBtn.classList.add("trash-btn");
        todoDiv.appendChild(trashBtn);

        //append to list
        todoList.appendChild(todoDiv);
    });
}

//remove LS todos
function removeLocalTodos(todo) {
    //check if already exist
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = []; //create an empty array
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1); //indexOf return position of element
    localStorage.setItem('todos', JSON.stringify(todos));
}