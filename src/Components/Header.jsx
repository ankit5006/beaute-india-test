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
					<Link to="/"><img src={process.env.PUBLIC_URL + "pictures/header-logo.png"} alt="" /></Link>
				</div>
				<ul className="navhead-links" id="myDIV">
					<li>
						<div className="wrapper">
							<div className="container searchcontainer">
								<div className="search_wrap search_wrap_1">
									<div className="search_box">
										<input type="text" className="input-search" placeholder="SEARCH" />
										<div className="btn btn_common"><Link to="">
											<img src={process.env.PUBLIC_URL + "pictures/search.svg"} className="search-img" alt="" />
										</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</li>
					<li>

						<Link to="/productdetail">
							<img src={process.env.PUBLIC_URL + "pictures/whishlist.svg"} className="heart-img" alt="" />
						</Link>

					</li>
					<li>
						<Link to="/cart">
							<img src={process.env.PUBLIC_URL + "pictures/cart.svg"} className="cart-img" alt="" />
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