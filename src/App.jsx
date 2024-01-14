import React, { useState } from "react";

function App() {
	const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const addTodo = () => {
        setTodoList(prevTodoList => [...prevTodoList, todo]);
        setTodo("");
    };
	return (
		<div>
			<h1>Todo App</h1>
			<input
				placeholder="Enter todo"
				value={todo}
				onChange={(event) => setTodo(event.target.value)}
			/>
			<button onClick={addTodo}>Add Todo</button>
		</div>
	);
}

export default App;
