import { AddressForm, AddressList, UserLoginForm } from 'components/checkout';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { useUser } from 'hooks';
import { Fragment, useState } from 'react';

const Checkout = () => {
	const { isUserLoggedIn } = useUser()
	const [id, setId] = useState(0)

	return (
		<Fragment>
			<Header />
			<div className="container-fluid">
				<div className="main-container-checkout">
					<div className="login-section">
						<div className="row ">
							<div className="login-form-column">

								{!isUserLoggedIn && (<UserLoginForm />)}

								<h2>Delivery address</h2>

								{isUserLoggedIn && (<AddressForm editId={id} />)}

							</div>

						</div>
					</div>

					{isUserLoggedIn && (
						<Fragment>
							<div className="mb-2">
								<div className="new2"></div>
							</div>

							<AddressList idState={[id, setId]} />

							<div className="mb-2">
								<div className="new2"></div>
							</div>
						</Fragment>
					)}


					<div className="payment-optoin-section">
						<div className="row pt-5 pb-5">
							<div className="col-lg-8">
								<h2>Payment Option</h2>
								<div className="choose-payment-mode mt-5 pe-5">
									<ul>
										<div className="radio-btn-section pe-3">
											<li>Razor pay </li>
											<div className="form-check">
												<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
												<label className="form-check-label" for="exampleRadios1">

												</label>
											</div>
										</div>

										<hr />
										<div className="radio-btn-section pe-3">
											<li>Cash on delivery</li>

											<div className="form-check">
												<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
												<label className="form-check-label" for="exampleRadios2">

												</label>
											</div>
										</div>
										<hr />
										<div className="radio-btn-section pe-3">
											<li>UPIs</li>
											<div className="form-check">
												<input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
												<label className="form-check-label" for="exampleRadios3">

												</label>
											</div>
										</div>

									</ul>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="total-section">
									<h1 className="mb-5"> <u> Total</u></h1>
									<div className="total-products">
										<div className="product-price">
											<h5>Playboy Endless Night</h5><span>1000</span>
										</div>
										<div className="product-price">
											<h5>Playboy Endless Night</h5><span>1000</span>
										</div>
										<div className="product-price">
											<h5>GST</h5><span>200</span>
										</div>
										<div className="mb-2 mt-4">
											<div className="new2"></div>
										</div>
										<div className="product-price">
											<h5>Sub Total</h5><span>3000</span>
										</div>
									</div>
									<button disabled={!isUserLoggedIn} className="payment-btn mt-5" > Proceed to Payment</button>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
			<Footer />
		</Fragment>
	)
}

export default Checkout