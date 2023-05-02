import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from './Product';
const URL = 'https://dummyjson.com/products';

const Products = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const fetchData = async () => {
		try {
			const { data } = await axios.get(URL);
			console.log({ data });
			setProducts(data?.products);
		} catch (error) {
			console.log({ error });
		} finally {
			setIsLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	if (isLoading) return <h1>Loading...</h1>;
	return (
		<div>
			<ul>
				{products.map((product, index) => (
					<li key={index}>
						<Product product={product} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Products;
