import React, { Component } from 'react';
import Fancybox from '../../../hook/Fancybox';

class Modal extends Component {
	render() {
		return (
			<Fancybox options={{ infinite: false }}>
				<div
					className='modal fade'
					id='modelId'
					tabIndex={-1}
					role='dialog'
					aria-labelledby='modelTitleId'
					aria-hidden='true'
				>
					<div className='modal-dialog' role='document'>
						<div className='modal-content'>
							<div className='modal-header'>
								<h5 className='modal-title'>Nike Air One</h5>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-label='Close'
								>
									<span aria-hidden='true'>×</span>
								</button>
							</div>
							<div className='modal-body'>
								<div className='container-fluid'>
									<table className='table'>
										<thead>
											<tr>
												<th>Name:</th>
												<th>Nike Air One</th>
											</tr>
											<tr>
												<th>Price:</th>
												<th>100$</th>
												{/* .toLocaleString('en-US', {
                          style: 'currency',
                          currency: 'USD',
                        }) */}
											</tr>
											<tr>
												<th>Dscription:</th>
												<th>
													The adidas Primeknit upper wraps the foot with a
													supportive fit that enhances movement
												</th>
											</tr>
											<tr>
												<th>Quantity:</th>
												<th>950</th>
											</tr>
											<tr>
												<th className='table-image'>Image:</th>
												<th>
													<img
														data-fancybox='responsive'
														data-src='http://svcy3.myclass.vn/images/adidas-prophere.png'
														src='http://svcy3.myclass.vn/images/adidas-prophere.png'
														data-caption='Nike Air One'
														alt=''
														style={{
															width: 100,
															height: 100,
															cursor: 'pointer',
														}}
													/>
												</th>
											</tr>
										</thead>
									</table>
								</div>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-secondary'
									data-dismiss='modal'
								>
									Close
								</button>
								<button type='button' className='btn btn-primary'>
									Save
								</button>
							</div>
						</div>
					</div>
				</div>
			</Fancybox>
		);
	}
}
export default Modal;
