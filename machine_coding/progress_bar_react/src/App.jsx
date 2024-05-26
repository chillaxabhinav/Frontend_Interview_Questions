import { useState, useEffect } from 'react';
import './app.css';

import ProgressBar from "./progress-bar";

function App() {
	const [value, setValue] = useState(0);

	useEffect(() => {
		setInterval(() => {
			setValue((prev) => prev + 1);
		}, 30);
	}, []);

	return (
		<div className='app'>
			<span>
				Progress Bar
			</span>
			<ProgressBar value={value}/>

			<div style={{ backgroundColor: 'black', height: '50px', width: '200px' }}>
				<div style={{ color: 'white' }}>
					Hello
				</div>
			</div>
		</div>
	)
};

export default App;
