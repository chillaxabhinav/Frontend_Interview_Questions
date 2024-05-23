/*
	Built a highly scalable caoursel component in React JS

	Requirements
	- We want to create a carousel component which takes array of images as input.
	- The component should efficiently handle a large number of images while maintaining scalability,
	Performance Optimization and extensibility
	- Focus on Accessibility
*/

// import { useState } from 'react'
import { useState } from "react";
import Carousel from "./components/carousel";
import { useEffect } from "react";

//https://jsonplaceholder.typicode.com/photos?_limit=8

function App() {
	const [loading, setLoading] = useState(false);
	const [images, setImages] = useState([]);

	const fetchImages = async (limit) => {
		try {
			setLoading(true);
			const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`);
			const imagesData = await response.json();
			console.log(imagesData);
			setImages(imagesData);
		} catch (e) {
			console.log("Error fetching images ---> ", e);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchImages(8);
	}, []);

	return (
		<div className='carousel-container'>
			<Carousel
				images={images}
				isLoading={loading}
				// imagePerSlide={}
				// imageLimit={}
			/>
		</div>
	)
};

export default App;
