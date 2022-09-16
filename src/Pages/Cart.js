import { Component } from 'react';

import { Link } from "react-router-dom";
import Footer from '../components/Footer';
import Header from '../components/Header';

class Cart extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="main-cart-section">
            <div className="container-fluid">
              <h1 className="pt-4 cart-heading ">Cart</h1>
              <div className="row mt-4 mb-5">
                <div className="col-lg-8 ">
                  <div className="cart-section p-4">
                    <div className="row cart-main">
                      <div className="col-lg-3 col-md-3 col-sm-4"><img src={process.env.PUBLIC_URL + "pictures/Rectangle 98.png"} alt="" />
                      </div>
                      <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="head-price mt-3">
                          <h5>Playboy Endless Night</h5>
                          <h4>RS 1000</h4>
                        </div>
                        <div className="qunt-main">
                          <div className="quantity mt-4">
                            <h6>Quantity</h6>
                            <div className="wrapper">
                              <span className="minus">-</span>
                              <span className="num">01</span>
                              <span className="plus">+</span>
                            </div>

                          </div>
                        </div>
                        <div className='delete-img mt-4'>
                          <img src={process.env.PUBLIC_URL + "pictures/delete.png"} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="dashed-border"></div>
                    <div className="row cart-main">
                      <div className="col-lg-3 col-md-3 col-sm-4"><img src={process.env.PUBLIC_URL + "pictures/Rectangle 98.png"} alt="" /></div>
                      <div className="col-lg-9 col-md-9 col-sm-8">
                        <div className="head-price mt-3">
                          <h5>Playboy Endless Night</h5>
                          <h4>RS 1000</h4>
                        </div>
                        <div className="qunt-main">
                          <div className="quantity mt-4">
                            <h6>Quantity</h6>
                            <div className="wrapper">
                              <span className="minus">-</span>
                              <span className="num">01</span>
                              <span className="plus">+</span>
                            </div>

                          </div>
                        </div>
                        <div className='delete-img mt-4'>
                          <img src={process.env.PUBLIC_URL + "pictures/delete.png"} alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="dashed-border"></div>
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
                      <div className="product-price">
                        <h5>Playboy Endless Night</h5><span>1000</span>
                      </div>
                      <div className="product-price">
                        <h5>Playboy Endless Night</h5><span>1000</span>
                      </div>
                      <div className="product-price">
                        <h5>GST</h5><span>1000</span>
                      </div>
                      <div className="mb-2 mt-4">
                        <div className="new2"></div>
                      </div>
                      <div className="product-price">
                        <h5>Sub Total</h5><span>3000</span>
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
      </>
    )
  }
}

export default Cart;