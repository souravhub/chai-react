import { createContext, useContext } from 'react';

export const TodoContext = createContext({
	todos: [
		{
			id: 1,
			todo: 'Buy milk',
			completed: false,
		},
	],
	addTodo: (todo) => {},
	updateTodo: (id, todo) => {},
	deleteTodo: (id, todo) => {},
	toggleComplete: (id) => {},
});

export const useTodo = () => {
	return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
