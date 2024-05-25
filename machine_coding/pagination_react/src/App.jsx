import { useState, useEffect } from "react";
import './app.css';

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
			const res = await fetch('https://dummyjson.com/products?limit=100');
			const data = await res.json();
			if (data && data.products && Array.isArray(data.products)) {
				setProducts(data.products);
				const totalProducts = data.products.length;
				const lastPage = totalProducts % productsPerPage;
				setTotalPages((totalProducts/productsPerPage) + (lastPage > 0 ? 1 : 0));
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
	}, []);

	const onPageChange = (e) => {
		const pageId = e.target.getAttribute('data-id');
		if (!pageId) return;
		const intPageId = parseInt(pageId);
		if (intPageId === -2) setCurrentPage((prev) => prev - 1);
		else if (intPageId === -1) setCurrentPage((prev) => prev + 1);
		else setCurrentPage(intPageId);
	}

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
				{products.slice((currentPage * productsPerPage) - productsPerPage, currentPage * productsPerPage).map(product => {
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
				<div className="pagination" onClick={(e) => onPageChange(e)}>
					{currentPage !== 1 && (
						<span className="pgn_btn" data-id={-2}>
							⏮️
						</span>
					)}
					{[...Array(totalPages)].map((_, i) => {
						const selected = (i+1) === currentPage
						return (
							<span className={`pgn_btn${selected ? ' selected' : ''}`} data-id={i+1}>
								{i + 1}
							</span>
						)
					})}
					{currentPage !== totalPages && (
						<span className="pgn_btn" data-id={-1}>
							⏭️
						</span>
					)}
				</div>
			)}
		</>
	);
};

export default App;
