import React, { useState } from "react";

function App() {
	const [todo, setTodo] = useState("");
	return (
		<div>
			<h1>Todo App</h1>
			<input
				placeholder="Enter todo"
				value={todo}
				onChange={(event) => setTodo(event.target.value)}
			/>
			<button>Add Todo</button>
		</div>
	);
}

export default App;
