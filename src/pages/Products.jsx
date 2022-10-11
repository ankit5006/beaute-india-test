/* eslint-disable react-hooks/exhaustive-deps */
import filterImg from 'assets/pictures/filter.png';
import hrView from 'assets/pictures/hr-view.svg';
import squareView from 'assets/pictures/square-view.svg';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { ProductCard, ProductQuery, Sidebar, Slider } from 'components/products';
import { useShop } from 'hooks';
import { Fragment, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Products = () => {
	const { isLoggedIn } = useShop()
	const navigate = useNavigate()

	useEffect(() => {
		if (!isLoggedIn) {
			navigate('/')
		}
	}, [isLoggedIn])
	const { data } = ProductQuery()

	return (
		<Fragment>
			<Header />

			<Slider />

			<div className="container-fluid">
				<div className="row">
					<div className="col-lg-2 col-md-3 sidebar-contect" id="side">
						<Sidebar />
					</div>

					<div className="col-lg-10 col-md-9 main-content" >

						<h1 className="mb-4">
							Product list
						</h1>
						<div className="container-fluid ">
							<div className="row main-row">
								<div className="row sorting-section">


									<div className="main-box">
										<div className="box1 ">
											<p> VIEW AS
												<img className='im-1' src={squareView} alt="" />
												<img className='im-2' src={hrView} alt="" />
											</p>
										</div>
										<div className="box2 "><p>ITEMS PER PAGE:50</p></div>
										<div className="box3 "><select className="form-select form-filter" aria-label="Default select example">
											<option selected>Default Sorting</option>
											<option value="1">Popularity</option>
											<option value="2">Low</option>
											<option value="3">High</option>
										</select></div>
										<div className="box4 " >
											<p>
												<span onClick="openside()">
													<img src={filterImg} width="10%" alt="" />&nbsp;&nbsp;Filter
												</span>
											</p>
										</div>
									</div>



								</div>
							</div>

							<div className="row text-center mt-2 mb-5">
								{data.length > 0 ? (
									<Fragment>
										{data.map((product, idx) => (
											<Fragment key={idx}>
												<ProductCard product={product} />
											</Fragment>
										))}
									</Fragment>
								) : (
									<div className='alert alert-info'>No product found</div>
								)}
							</div>

						</div>
					</div>
				</div>

			</div>



			<Footer />
		</Fragment>
	)

}

export default Products;