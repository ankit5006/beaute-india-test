import group15 from 'assets/pictures/Group 1.5.png';
import group1 from 'assets/pictures/Group 1.png';
import group3 from 'assets/pictures/Group 3.png';
import { LoginForm } from 'components/home';
import { Fragment } from "react";

const Home = () => {
	return (
		<Fragment>
			<div className='container-fluid bg'>
				<div className="login-container">
					<div className="row">
						<div className="col-lg-6">
							<div className="dot-img-one">
								<img src={process.env.PUBLIC_URL + "pictures/Group 3.png"} width="12%" alt="" />
							</div>
							<div className="login-form">
								<LoginForm />
							</div>
							<div className="dot-img-two">
								<img src={group3} width="14%" alt="" />
							</div>
						</div>
						<div className="login-img col-lg-6">
							<div className="row">
								<img src={group1} className="img-1" alt="" />
								<img src={group15} className="img-2" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}


export default Home;