// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import React from 'react';

// function MyApp() {
// 	return (
// 		<div>
// 			<h1>Custom App | Chai</h1>
// 		</div>
// 	);
// }

// const ReactElement = {
// 	type: 'a',
// 	props: {
// 		href: 'https://google.com',
// 		target: '_blank',
// 	},
// 	children: 'Click me to visit',
// };

// const anotherElement = (
// 	<a href="https://google.com" target="_blank">
// 		Visit Google
// 	</a>
// );

const anotherUser = 'chai aur user';

const reactElement = React.createElement(
	'a',
	{ href: 'https://google.com', target: '_blank' },
	'Click me to visit google',
	anotherUser
);

createRoot(document.getElementById('root')).render(reactElement);
