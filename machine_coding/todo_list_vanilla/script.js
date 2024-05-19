document.addEventListener("DOMContentLoaded", function () {
    const todoForm = document.querySelector(".todo-form");
    const todoInput = document.querySelector(".todo-input");
    const todoList = document.querySelector(".todo-list");
    const todoSubmit = document.querySelector(".todo-submit");

    let editMode = false;
    let editItem = null;

    todoForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        if (todoText !== "") {
            if  (editMode) {
                // edit todo
                editItem.firstChild.textContent = todoText;
                todoSubmit.innerText = "Add Todo";
                editMode = false;
                editItem = null;
            } else {
                // add todos
                addTodoItem(todoText);
            }
            todoInput.value = "";
        } else {
            alert("Please enter a valid task");
        }
    })

    todoList.addEventListener("click", function (e) {
        const target = e.target;
        if (target.tagName === 'BUTTON') {
            const todoItem = target.parentNode;
            if (target.innerText === 'Remove') {
                todoItem.remove();
            } else if (target.innerText === 'Edit') {
                editMode = true;
                editItem = todoItem;
                todoSubmit.innerText = 'Edit Todo';
                todoInput.value = todoItem.firstChild.textContent;
                todoInput.focus();
            }
        }
    })

    function addTodoItem (todoText) {
        const todoItem = document.createElement('li');
        const editButton = document.createElement('button');
        const removeButton = document.createElement('button');

        todoItem.innerHTML = `<span>${todoText}</span>`;
        editButton.innerText = 'Edit';
        removeButton.innerText = 'Remove';

        todoItem.appendChild(editButton);
        todoItem.appendChild(removeButton);
        todoList.appendChild(todoItem);
    }
})