import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';
import ProductList from './ProductList';
import data from '../../data/dataShoes.json';
class ShoesStore extends Component {
	state = {
		shoesDetail: {
			id: 0,
			name: 'no-name',
			alias: 'no-alias',
			price: 0,
			description: 'no-description',
			shortDescription: 'no-short-description',
			quantity: 0,
			image: './img/default-thumbnail.jpg',
		},
	};
	viewShoesDetail = shoesClick => {
		this.setState({
			shoesDetail: shoesClick,
		});
	};
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
							<ProductList
								shoesList={data}
								viewShoesDetail={this.viewShoesDetail}
							/>
						</div>
					</section>
					<Modal shoes={this.state.shoesDetail} />
					<Footer />
				</div>
			</>
		);
	}
}
export default ShoesStore;
