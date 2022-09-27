import cart from 'assets/pictures/cart.svg';
import logo from 'assets/pictures/header-logo.png';
import search from 'assets/pictures/search.svg';
import whishlist from 'assets/pictures/whishlist.svg';
import { useUser } from 'hooks';
import { Fragment } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from 'store/auth/actions';
import { destroy } from 'store/shop/actions';
import { API_ENDPOINTS } from "utilities";

function Header() {
	const dispatch = useDispatch()
	const { user } = useUser()

	const removeShop = () => {
		dispatch(destroy(API_ENDPOINTS.LOGOUT))
			.then(response => {
				if (response) {
					window.location.href = '/'
				}
			})
	}

	const logoutUser = () => {
		dispatch(logout(API_ENDPOINTS.AUTH.LOGOUT))
			.then(response => {
				if (response?.success) {
					window.location.href = '/products'
				}
			})
	}



	return (
		<Fragment>
			<div className="navhead">
				<div className="logoo">
					<Link to="/">
						<img src={logo} alt="" />
					</Link>
				</div>
				<ul className="navhead-links" id="myDIV">
					<li>
						<div className="wrapper">
							<div className="container searchcontainer">
								<div className="search_wrap search_wrap_1">
									<div className="search_box">
										<input type="text" className="input-search" placeholder="SEARCH" />
										<div className="btn btn_common"><Link to="">
											<img src={search} className="search-img" alt="" />
										</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>

						<Link to="/productdetail">
							<img src={whishlist} className="heart-img" alt="" />
						</Link>

					</li>
					<li>
						<Link to="/cart">
							<img src={cart} className="cart-img" alt="" />
						</Link>
					</li>
					<li>
						<NavDropdown
							id="nav-dropdown-dark-example"
							title={user?.name}
							menuVariant="dark"
						>
							<NavDropdown.Item onClick={logoutUser}>
								Logout User
							</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item onClick={removeShop}>
								Logout Shop
							</NavDropdown.Item>
						</NavDropdown>
					</li>
				</ul>

				<div className="hamburger" onClick="myFunction()">
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>

		</Fragment>
	)
}

export default Header;