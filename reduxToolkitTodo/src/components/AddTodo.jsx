import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from '../features/todo/todoSlice';
import { useTodo } from '../contexts';

function AddTodo() {
	const [input, setInput] = useState('');
	const [btnLabel, setbtnLabel] = useState('Add Todo');
	const dispatch = useDispatch();

	const { editableTodo, todoEditStatus, afterUpdate } = useTodo();

	const addTodoHandler = (e) => {
		e.preventDefault();
		if (input.trim() == '') return;
		if (btnLabel == 'Add Todo') {
			dispatch(addTodo(input));
		} else {
			dispatch(updateTodo({ text: input, id: editableTodo.id }));
			afterUpdate();
		}
		setInput('');
	};

	useEffect(() => {
		if (todoEditStatus) {
			setbtnLabel('Update Todo');
		} else {
			setbtnLabel('Add Todo');
		}
		if (Object.keys(editableTodo).length) {
			setInput(editableTodo.text);
		} else {
			setInput('');
		}
	}, [editableTodo, todoEditStatus]);

	return (
		<>
			<form onSubmit={addTodoHandler} className="space-x-3 mt-12">
				<input
					type="text"
					className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
					placeholder="Enter a Todo..."
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				<button
					type="submit"
					className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
				>
					{btnLabel}
				</button>
			</form>
		</>
	);
}

export default AddTodo;
