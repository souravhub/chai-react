import { useState } from 'react';

function App() {
	const [color, setColor] = useState('olive');

	// const changeColor = function (color) {
	// 	setColor(color);
	// };

	return (
		<div
			className="w-full h-screen duration-200"
			style={{ backgroundColor: color }}
		>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white py-2 px-3 rounded-md">
					<button
						className="outline-none px-4 rounded-sm shadow-lg text-white py-1"
						style={{ backgroundColor: 'red' }}
						onClick={() => setColor('red')}
					>
						Red
					</button>
					<button
						className="outline-none px-4 rounded-sm shadow-lg text-white py-1"
						style={{ backgroundColor: 'green' }}
						onClick={() => setColor('green')}
					>
						Green
					</button>
					<button
						className="outline-none px-4 rounded-sm shadow-lg text-white py-1"
						style={{ backgroundColor: 'blue' }}
						onClick={() => setColor('blue')}
					>
						Blue
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
