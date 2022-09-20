import cart from 'assets/pictures/cart.svg';
import logo from 'assets/pictures/header-logo.png';
import search from 'assets/pictures/search.svg';
import whishlist from 'assets/pictures/whishlist.svg';
import { Fragment } from "react";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "store/auth/actions";
import { API_ENDPOINTS } from "utilities";

function Header() {
	const dispatch = useDispatch()
	const { user } = useSelector(state => state.auth)

	const handleLogout = () => {
		console.log('d');
		dispatch(logout(API_ENDPOINTS.LOGOUT))
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
							{/* <NavDropdown.Divider /> */}
							<NavDropdown.Item onClick={handleLogout}>
								Logout
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