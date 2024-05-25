/*
	Implement Infinite Scroll in React

	Requirements
		- Implement Infinite Scrolling for fetching more products when the user reaches the bottom of the page.
		- Ensure that loading indicators are displayed appropriately while fetching data.
		- Implement optimizations to prevent excessive API requests during scrolling.
*/

import { useState, useEffect } from 'react';

function throttle(mainFunction, delay) {
	let timerFlag = null;
	return (...args) => {
		if (timerFlag === null) {
			mainFunction(...args);
			timerFlag = setTimeout(() => {
			timerFlag = null;
			}, delay);
		}
	};
}

function App() {
	const [products, setProducts] = useState([]);
	const [page, setPage] = useState(1);

	const [loading, setLoading] = useState(false);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const resp = await fetch(`https://dummyjson.com/products?limit=${page*10}`);
			const data = await resp.json();
			setProducts(data);
		} catch (e) {
			console.log('error in fetching --> ', e);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [page]);

	const handleScroll = throttle(() => {
		if (
			(window.innerHeight + document.documentElement.scrollTop + 500) > document.documentElement.offsetHeight
			&& !loading
		) {
			setPage((prev) => prev + 1);
		}
	}, 500);

	useEffect(() => {
		document.addEventListener('scroll', handleScroll);
		return () => document.removeEventListener('scroll', handleScroll);
	}, []);

	const { products: allProducts } = products;

	return (
		<div>
			<h1>Infinite Scroll</h1>
			{allProducts?.length > 0 && (
				<div className='products'>
					{allProducts?.map(product => {
						return (
							<div className='product__single' key={product.id}>
								<img src={product.thumbnail} alt={product.title} />
								<span>{product.title}</span>
							</div>
						)
					})}
				</div>
			)}
			{loading && (
				<h3>
					loading...
				</h3>
			)}
		</div>
	);
};

export default App;
