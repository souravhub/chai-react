import { useState } from 'react';

import './App.css';
import AddTodo from './components/addTodo';
import Todos from './components/Todos';
import { TodoProvider } from './contexts/index';

function App() {
	// const [todoEditStatus, setTodoEditStatus] = useState(false);
	// const [editableTodo, setEditableTodo] = useState({});
	// const initUpdate = () => {
	// 	setTodoEditStatus(true);
	// };
	const [todoEditStatus, setTodoEditStatus] = useState(false);
	const [editableTodo, setEditableTodo] = useState({});
	const initUpdate = (todo) => {
		setEditableTodo(todo);
		setTodoEditStatus(true);
	};
	const afterUpdate = (todo) => {
		setEditableTodo({});
		setTodoEditStatus(false);
	};

	return (
		<>
			<TodoProvider
				value={{
					initUpdate,
					todoEditStatus,
					editableTodo,
					afterUpdate,
				}}
			>
				<h1>Learn About Redux Toolkit</h1>
				<AddTodo />
				<Todos />
			</TodoProvider>
		</>
	);
}

export default App;
