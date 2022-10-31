import React, { Component } from 'react';
import ProductItem from '../ProductItem';

class ProductList extends Component {
	render() {
		return (
			<>
				<div className='row d-flex'>
					<ProductItem />
					<ProductItem />
					<ProductItem />
				</div>
			</>
		);
	}
}

export default ProductList;
