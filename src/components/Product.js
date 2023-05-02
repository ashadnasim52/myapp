import React from 'react';

const Product = ({ product }) => {
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-between',
			}}
		>
			<div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '50%',
					}}
				>
					<h6>{product?.title}</h6> <p>{product?.price}</p>
				</div>
				<p>{product?.description}</p>
			</div>

			<img
				src={product?.thumbnail}
				alt=''
				style={{
					height: 150,
					width: 200,
				}}
			/>
		</div>
	);
};

export default Product;
