import { useState, useEffect } from "react";
import './app.css';

import Pagination from "./components/pagination";

function App() {
	const [products, setProducts] = useState([]);

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(0);
	const productsPerPage = 10;

	const fetchProducts = async () => {
		setLoading(true);
		try {
			const res = await fetch(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${(currentPage * productsPerPage) - productsPerPage}`);
			const data = await res.json();
			if (data && data.products && Array.isArray(data.products)) {
				setProducts(data.products);
				const totalProducts = data.total;
				const totalPagesCalc = Math.ceil(totalProducts/productsPerPage);
				setTotalPages(totalPagesCalc);
			} else {
				setProducts([]);
			}
		} catch (e) {
			console.log('error fetching products ---> ', e);
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts()
	}, [currentPage]);

	if (loading) {
		return (
			<div>
				loading...
			</div>
		)
	}

	if (error) {
		return (
			<div>
				{error}
			</div>
		)
	}

	return (
		<>
			<div className="products">
				{products.map(product => {
					return (
						<div className="product_card" key={product.id}>
							<div>
								<img src={product.thumbnail} alt='product' />
							</div>
							<div>
								{product.title}
							</div>
						</div>
					)
				})}
			</div>
			{products.length > 0 && (
				<Pagination
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
					totalPages={totalPages}
				/>
			)}
		</>
	);
};

export default App;
