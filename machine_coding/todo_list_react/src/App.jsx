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
	const [mode, setMode] = useState(false);

	const addTodos = () => {
		const currentText = inputRef.current.value;
		if (currentText === "") {
			alert("Please add valid task");
			return
		}
		const newTodo = {
			text: currentText,
			id: nanoid()
		}
		const newTodoList = todos.slice().map(ele => structuredClone(ele));
		// add todo at top
		newTodoList.unshift(newTodo);
		setTodos(newTodoList);
		inputRef.current.value = "";
	};

	const onClickTodo = (e) => {
		const currentEle = e.target;
		if (currentEle.tagName === 'BUTTON') {
			const todoId = currentEle.parentElement.getAttribute('data-index');
			if (currentEle.innerText === 'Delete') {
				const filteredTodos = todos.filter(todo => todo.id !== todoId);
				setTodos(filteredTodos);
			}
		}
	}

	return (
		<>
			<div>
				<h1>Todo List React</h1>
				<input type='text' placeholder='Write some task' ref={inputRef} />
				<button onClick={() => addTodos()}>Add Todo</button>
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
