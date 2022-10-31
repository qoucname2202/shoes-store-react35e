import React, { Component } from 'react';
import Fancybox from '../../../hook/Fancybox';

class ProductItem extends Component {
	render() {
		return (
			<Fancybox options={{ infinite: false }}>
				<div className='col-12 col-lg-4'>
					<div className='pro-card-primary'>
						<img
							src='http://svcy3.myclass.vn/images/adidas-prophere.png'
							data-fancybox='gallery'
							data-src='http://svcy3.myclass.vn/images/adidas-prophere.png'
							data-caption='📌Name: Nike air one&lt;br /&gt;📝Description: The midsole contains 20% more Boost for an amplified Boost feeling.'
							alt=''
						/>
						<div className='card-text-primary'>
							<h4>Nike Air One</h4>
							<p>450$</p>
							<div className='card-button'>
								<button
									type='button'
									data-toggle='modal'
									data-target='#modelId'
									className='btn-buy d-flex justify-content-center align-items-center'
								>
									<span>
										Add to cart <i className='fa fa-cart-plus'></i>
									</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</Fancybox>
		);
	}
}

export default ProductItem;
