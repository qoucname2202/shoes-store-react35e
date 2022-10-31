import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import ProductList from './ProductList';

class ShoesStore extends Component {
	render() {
		return (
			<>
				<div className='wrapper'>
					<Header />
					<section className='pro-container mt-4'>
						<div className='small-container'>
							<div className='pro-title-primary text-center'>
								<h1>- Shoes Shop -</h1>
							</div>
							<ProductList />
						</div>
					</section>
					<Modal />
					<Footer />
				</div>
			</>
		);
	}
}
export default ShoesStore;
