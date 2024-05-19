import { nanoid } from 'nanoid';

import { useState, useRef } from 'react'
import './App.css'

function App() {
	const inputRef = useRef(null);

	/*
		{
			text: "",
			id: "" // nanoId
		}
	*/
	const [todos, setTodos] = useState([]);
	const [editMode, setEditMode] = useState(false);
	const [editTodoId, setEditTodoId] = useState(null);

	const todoSubmit = () => {
		const currentText = inputRef.current.value;
		if (currentText === "") {
			alert("Please add valid task");
			return
		}
		if (!editMode) {
			// add mode
			const newTodo = {
				text: currentText.trim(),
				id: nanoid()
			}
			const newTodoList = todos.slice().map(ele => structuredClone(ele));
			// add todo at top
			newTodoList.unshift(newTodo);
			setTodos(newTodoList);
		} else {
			// edit mode
			const newTodoList = todos.map((ele) => {
				if (ele.id === editTodoId) {
					return {
						...ele,
						text: currentText
					}
				}
				return {
					...ele
				};
			});
			setTodos(newTodoList);
			setEditMode(false);
			setEditTodoId(null);
		}
		inputRef.current.value = "";
	};

	const onClickTodo = (e) => {
		const currentEle = e.target;
		if (currentEle.tagName === 'BUTTON') {
			const clickedTodo = currentEle.parentElement;
			const todoId = clickedTodo.getAttribute('data-index');
			if (currentEle.innerText === 'Delete') {
				const filteredTodos = todos.filter(todo => todo.id !== todoId);
				setTodos(filteredTodos);
			} else if (currentEle.innerText === 'Edit') {
				inputRef.current.value = clickedTodo.firstChild.innerText;
				setEditMode(true);
				setEditTodoId(todoId);
			}
		}
	}

	return (
		<>
			<div>
				<h1>Todo List React</h1>
				<input type='text' placeholder='Write some task' ref={inputRef} />
				<button onClick={() => todoSubmit()}>{editMode ? 'Edit Todo' : 'Add Todo'}</button>
			</div>
			<ul onClick={(e) => onClickTodo(e)}>
				{todos.map((todo) => {
					const { text, id } = todo;
					return (
						<li key={id} data-index={id}>
							<span>{text}</span>
							<button>Edit</button>
							<button>Delete</button>
						</li>
					)
				})}
			</ul>
		</>
	);
}

export default App
