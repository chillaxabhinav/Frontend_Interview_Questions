import { useState } from 'react';
import StarRating from './starRating';
import './App.css';

function App() {
	const [currentRating, setCurrentRating] = useState(0);

	const onRatingChange = (newRating) => {
		setCurrentRating(newRating);
	};

	return (
		<div>
			<h2>Star Rating</h2>
			<StarRating
				size={5}
				onChange={onRatingChange}
				rating={currentRating}
			/>
			<p>currentRating: {currentRating}</p>
		</div>	
	);
}

export default App;
