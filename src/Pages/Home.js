
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className='container-fluid bg'>
        <div className="login-container">
          <div className="row">
            <div className="col-lg-6">
              <div className="dot-img-one">
                <img src={process.env.PUBLIC_URL + "pictures/Group 3.png"} width="12%" alt="" />
              </div>
              <div className="login-form">
                <form action="#">
                  <h1>BEAUT INDIA</h1>
                  <h6 className='mb-3'>LOG IN</h6>
                  <div className="form-group">
                    <select name="company" className=" form-select form-co" id="company" >
                      <option value="">Select your company</option>
                      <option value="1">roots</option>
                      <option value="2">roots-2</option>
                      <option value="3">roots-3</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label for="exampleInputPassword1" className="ps">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                  </div>
                  <button type="submit" className="loginbtn"> <Link to="/allproduct"> Log in</Link></button>
                </form>
              </div>
              <div className="dot-img-two">
                <img src={process.env.PUBLIC_URL + "pictures/Group 3.png"} width="14%" alt="" />
              </div>
            </div>
            <div className="login-img col-lg-6">
              <div className="row">
                <img src={process.env.PUBLIC_URL + "pictures/Group 1.png"} className="img-1" alt="" />
                <img src={process.env.PUBLIC_URL + "pictures/Group 1.5.png"} className="img-2" alt="" />


              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Home;