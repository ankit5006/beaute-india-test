/* eslint-disable react-hooks/exhaustive-deps */
import nounLove from "assets/pictures/noun-love-4726271.svg";
import ractangleImage from 'assets/pictures/Rectangle 633.png';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_ENDPOINTS, request } from "utilities";

const ProductDetail = () => {
	const { id } = useParams()
	const [product, setProduct] = useState(null)


	useEffect(() => {
		request.post(API_ENDPOINTS.PRODUCT_LIST_BY_ID, { id })
			.then(response => {
				if (response?.data) {
					setProduct(response?.data)
				}
			})
	}, [])



	return (
		<Fragment>
			<Header />
			<div className="container-fluid mt-5">
				<div className="main-product-details">
					<div className="container">
						<div className="row ">
							<div className="col-lg-5 ">
								<div className="main-product">
									<img src={product?.image || ractangleImage} alt="" />


								</div>
								<div className="more-product text-center mt-3">
									<img src={ractangleImage} alt="" />
									<img src={ractangleImage} alt="" />
									<img src={ractangleImage} alt="" />

								</div>
							</div>
							<div className="col-lg-7">
								<div className="product-details">
									<h3>{product?.name}</h3>
									<div className=" pt-3 pe-5" dangerouslySetInnerHTML={{ __html: product?.short_description }} />


									<h4 className="pb-4 pt-4">RS. {product?.normal_price}</h4>
									<div className="qunt-main">
										<div className="quantity">
											<h5>Quantity</h5>
											<div className="wrapper">
												<span className="minus">-</span>
												<span className="num">01</span>
												<span className="plus">+</span>
											</div>

										</div>
									</div>

									<div className="add-to-cart-whishlist mt-5">
										<button className="btn-1">Add to cart</button>
										<button className="btn-2">
											<img src={nounLove} alt="" />
										</button>
									</div>
									<div className="buy-now-btn mt-4">
										<Link to="/checkout" className='button'>Buy it now</Link>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


			<div className="container mt-5 mb-5">
				<section id="tabs">
					<nav>
						<div className="nav nav-tabs" id="nav-tab" role="tablist">
							<button className="nav-link active " id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button"
								role="tab" aria-controls="nav-home" aria-selected="false">
								Description
							</button>
							<button className="nav-link " id="nav-luxury-tab" data-bs-toggle="tab" data-bs-target="#nav-luxury"
								type="button" role="tab" aria-controls="nav-luxury" aria-selected="true">
								Customer reviews
							</button>
							<button className="nav-link" id="nav-prestige-tab" data-bs-toggle="tab" data-bs-target="#nav-prestige"
								type="button" role="tab" aria-controls="nav-prestige" aria-selected="false">
								Key features
							</button>
						</div>
					</nav>
					<div className="tab-content" id="nav-tabContent">
						<div className="tab-pane fade show active " id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
							<div className="container mt-4 mb-4">
								<div className="row">
									<div dangerouslySetInnerHTML={{ __html: product?.long_description }} />
								</div>
							</div>
						</div>

						<div className="tab-pane fade " id="nav-luxury" role="tabpanel" aria-labelledby="nav-luxury-tab">
							<div className="container mt-4 mb-4">
								<div className="row">
									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
									et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
									Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
									amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
									gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
									sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
								</div>
							</div>
						</div>

						<div className="tab-pane fade" id="nav-prestige" role="tabpanel" aria-labelledby="nav-prestige-tab">
							<div className="container mt-4 mb-4">
								<div className="row">

									Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
									et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
									Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
									amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
									aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
									gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
									sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
								</div>
							</div>
						</div>

					</div>
				</section>
			</div>



			<div className="container mt-5 Related-product-section">
				<h3>Related Products</h3>
				<p>View more</p>

			</div>
			<div className="container">
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
			<Footer />
		</Fragment>
	)

}

export default ProductDetail