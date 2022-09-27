import deleteImg from 'assets/pictures/delete.png';
import QuantityUpdate from 'components/cart/QuantityUpdate';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { remove } from 'store/cart/actions';

const Cart = () => {
	const dispatch = useDispatch()
	const { data, subTotal } = useSelector(state => state.cart)

	return (
		<Fragment>
			<Header />
			<div className="container-fluid">
				<div className="main-cart-section">
					<div className="container-fluid">
						<h1 className="pt-4 cart-heading ">Cart</h1>
						<div className="row mt-4 mb-5">
							<div className="col-lg-8 ">
								<div className="cart-section p-4">

									{
										data.length > 0 ? (
											<Fragment>
												{data.map((item, idx) => (
													<Fragment key={idx}>
														<div className="row cart-main">
															<div className="col-lg-3 col-md-3 col-sm-4">
																<img src={item?.model?.image} alt="" />
															</div>
															<div className="col-lg-9 col-md-9 col-sm-8">
																<div className="head-price mt-3">
																	<h5>{item?.model?.name}</h5>
																	<h4>RS {item?.price}</h4>
																</div>
																<div className="qunt-main">
																	<div className="quantity mt-4">
																		<h6>Quantity</h6>

																		<QuantityUpdate quantity={item?.quantity} id={item?.id} />
																	</div>
																</div>
																<div className='delete-img mt-4'>
																	<img src={deleteImg} alt="" onClick={() => dispatch(remove(item.id))} />
																</div>
															</div>
														</div>
														<div className="dashed-border"></div>
													</Fragment>
												))}
											</Fragment>
										) : (
											<p className='text-center'>No product here</p>
										)
									}





								</div>
							</div>
							<div className="col-lg-4 pt-1">
								<div className="coupon-section mb-3">
									<h5 className="mb-3">Apply coupon</h5>
									<form action="">
										<input type="text" placeholder="coupon code" className="coupon-input" />
										<input type="submit" value="Apply" className="coupon-btn" />
									</form>
								</div>
								<div className="total-section">
									<h1 className="mb-5"> <u> Total</u></h1>
									<div className="total-products">
										{
											data.map((item, idx) => (
												<Fragment key={idx}>
													<div className="product-price">
														<h5>{item?.model?.name}</h5>
														<span>{Number(item?.quantity) * Number(item?.price)}</span>
													</div>
												</Fragment>
											))
										}


										<div className="product-price">
											<h5>GST</h5><span>0</span>
										</div>
										<div className="mb-2 mt-4">
											<div className="new2"></div>
										</div>
										<div className="product-price">
											<h5>Sub Total</h5><span>{subTotal}</span>
										</div>
									</div>
									<Link to="/checkout" className="payment-btn mt-5" > Proceed to Payment</Link>
								</div>
							</div>
						</div>
					</div>
					<div className=" Related-product-section">
						<h3>You may also like</h3>
						<p>View more</p>
					</div>
					<div className="">
						<div className="row text-center mt-2 mb-5">

							<div className="col-lg-3 col-md-6 col-sm-6 text-center">
								<div className="card mt-3 mb-2">
									<img src={process.env.PUBLIC_URL + "pictures/img1.png"} alt="" />

									<h2 className="card-title mb-2">
										Channel perfum
									</h2>
									<p>
										Lorem ipsum Lorem ipsum Lorem
									</p>
									<div className="price-buy pt-3 pb-3">
										<div className="price">
											RS 1250
										</div>
										<div>
											<button>Buy Now</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 text-center">
								<div className="card mt-3 mb-2">
									<img src={process.env.PUBLIC_URL + "pictures/img2.png"} alt="" />

									<h2 className="card-title mb-2">
										Channel perfum
									</h2>
									<p>
										Lorem ipsum Lorem ipsum Lorem
									</p>
									<div className="price-buy pt-3 pb-3">
										<div className="price">
											RS 1250
										</div>
										<div>
											<button>Buy Now</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 text-center">
								<div className="card mt-3 mb-2">
									<img src={process.env.PUBLIC_URL + "pictures/img3.png"} alt="" />

									<h2 className="card-title mb-2">
										Channel perfum
									</h2>
									<p>
										Lorem ipsum Lorem ipsum Lorem
									</p>
									<div className="price-buy pt-3 pb-3">
										<div className="price">
											RS 1250
										</div>
										<div>
											<button>Buy Now</button>
										</div>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-6 col-sm-6 text-center">
								<div className="card mt-3 mb-2">
									<img src={process.env.PUBLIC_URL + "pictures/img4.png"} alt="" />

									<h2 className="card-title mb-2">
										Channel perfum
									</h2>
									<p>
										Lorem ipsum Lorem ipsum Lorem
									</p>
									<div className="price-buy pt-3 pb-3">
										<div className="price">
											RS 1250
										</div>
										<div>
											<button>Buy Now</button>
										</div>
									</div>
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

export default Cart;