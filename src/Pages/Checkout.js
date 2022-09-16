import { Component } from 'react';

import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

class Checkout extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="main-container-checkout">
            <div className="login-section">
              <div className="row ">
                <div className="login-form-column ">
                  <h2>Delivery address</h2>
                  <form className="checkout-form">

                    <div className="checkout-margin">
                      <div className="input-icons-sign">
                        <i className="name-icon">
                        </i>
                        <input type="text" className=" fc-sign checkbr " id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="First Name" required />

                      </div>
                      <div className="input-icons-sign">
                        <i className="name-icon">
                        </i>
                        <input type="text" className=" fc-sign checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="Last Name" required />

                      </div>
                    </div>

                    <div className="checkout-margin ">
                      <div className="input-icons">
                        <i className="address-book-icon">
                        </i>
                        <input type="text" className=" fc-l checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="Address Line 1" required />

                      </div>
                    </div>
                    <div className="checkout-margin ">
                      <div className="input-icons">
                        <i className="address-book-icon">
                        </i>
                        <input type="text" className=" fc-l checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="Address Line 2" required />

                      </div>
                    </div>
                    <div className="checkout-margin">
                      <div className="input-icons-checkout">
                        <i className="gender-icon">
                        </i>

                        <div className="form-group">
                          <select className=" fc-checkout checkbr" id="exampleFormControlSelect1" required>
                            <option>Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </select>
                        </div>

                      </div>

                      <div className="input-icons-checkout">
                        <i className="phone-icon">
                        </i>
                        <input type="number" className=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="Phone number" required />

                      </div>

                      <div className="input-icons-checkout">
                        <i className="otp-icon">
                        </i>
                        <input type="email" className=" fc-checkout checkbr " id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="E-mail" required />

                      </div>
                    </div>
                    <div className="checkout-margin">
                      <div className="input-icons-checkout">
                        <i className="postal-icon">
                        </i>
                        <input type="number" className=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="Pincode" required />

                      </div>

                      <div className="input-icons-checkout">
                        <i className="map-icon">
                        </i>
                        <input type="text" className=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="City" required />

                      </div>

                      <div className="input-icons-checkout">
                        <i className="city-hall-icon">
                        </i>
                        <input type="text" className=" fc-checkout checkbr" id="exampleInputName" aria-describedby="emailHelp"
                          placeholder="State" required />

                      </div>
                    </div>

                    <div className="submit-section">
                      <span><div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                          Ship to a different address
                        </label>
                      </div></span>
                      <span className="sa-add"> <img src="/pictures/awesome-save.svg" width="15%" alt="" /> Save Address</span>
                    </div>

                  </form>
                </div>

              </div>
            </div>



            <div className="mb-2">
              <div className="new2"></div>
            </div>

            <div className="address-section">
              <span><h3>Saved Address</h3></span>
              <span> <img src="/pictures/Icon ionic-ios-add.svg" alt="" /> Add new address</span>
            </div>

            <div className="address-edit-section ">
              <div className="card-address mt-4 mb-5">
                <div className="card-address-edit">
                  <h5>Paras shah</h5>
                  <img src="/pictures/Icon material-edit.svg" alt="" />
                </div>
                <div className="mt-3">
                  <span>
                    <h5>
                      #23, Karwar Road House, <br />
                      Bangalore-568215, <br />
                      Ph: 9525624523
                    </h5>
                  </span>
                </div>

              </div>
            </div>

            <div className="mb-2">
              <div className="new2"></div>
            </div>

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
                    <Link to="/login" className="payment-btn mt-5" > Proceed to Payment</Link>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default Checkout;