import { Component } from 'react';
import { Link } from "react-router-dom";
import Footer from '../Components/Footer';
import Header from '../Components/Header';

class Products extends Component {
  render() {
    return (
      <>
        <Header />

        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src="/pictures/banner.png" className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-md-3 sidebar-contect" id="side">
              <div className="scroll-div-side">
                <div className="category-filter ">
                  <span onclick="openside()">
                    <img src="/pictures/Cancel-icon.png" alt="" /></span>
                  <ul className="nav flex-column">
                    <li>
                      <a ><img src={process.env.PUBLIC_URL + "pictures/arrow-down.svg"} alt="" />&nbsp;
                        <u className="cathead">Catogories</u></a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                      <a href="#">Fragnance</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                      <a href="#">Skin Care & Beauty</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                      <a href="#">Accessories</a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt'>
                      <a href="#">Home Fragrance </a>
                    </li>
                    <li className='mt-3 ps-3 cat-filt' >
                      <a href="#">Apparels </a>
                    </li>
                  </ul>
                </div>
                <div className="brands-filter">
                  <ul className="nav flex-column">
                    <li className='mb-3' >
                      <a><img src={process.env.PUBLIC_URL + "pictures/arrow-down.svg"} alt="" />&nbsp;<u className="cathead">Brands</u></a>
                    </li>

                    <div className="scroll-div">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          4711
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Alyssa
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Ashley
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Aramis
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Aspen
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Bahama
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Baomi
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Bentley
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Betty
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Barclay
                        </li>
                      </ul>
                    </div>

                  </ul>
                </div>

                <div className="price-filter">
                  <ul className="nav flex-column">
                    <li className='mb-3' >
                      <a><img src={process.env.PUBLIC_URL + "pictures/arrow-down.svg"} alt="" />&nbsp;<u className="cathead">Price</u></a>
                    </li>
                    <div className="scroll-div">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 0-499
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 500-999
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 1000-1999
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 2000-3999
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 4000-10000
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 10000-15000
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 15000-20000
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Rs. 20000 & above
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
                <div className="size-filter mb-5">
                  <ul className="nav flex-column">
                    <li className='mb-3' >
                      <a><img src={process.env.PUBLIC_URL + "pictures/arrow-down.svg"} alt="" />&nbsp;<u className="cathead">Size</u></a>
                    </li>
                    <div className="scroll-div">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          4711
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Alyssa
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Ashley
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Aramis
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Aspen
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Bahama
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Baomi
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Bentley
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Betty
                        </li>
                        <li className="list-group-item">
                          <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                          Barclay
                        </li>
                      </ul>
                    </div>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-lg-10 col-md-9 main-content" >

              <h1 className="mb-4">
                Product list
              </h1>
              <div className="container-fluid ">
                <div className="row main-row">
                  <div className="row sorting-section">


                    <div className="main-box">
                      <div className="box1 "> <p> VIEW AS <img className='im-1' src="/pictures/square-view.svg" alt="" /> <img className='im-2' src="/pictures/hr-view.svg" alt="" /></p> </div>
                      <div className="box2 "><p>ITEMS PER PAGE:50</p></div>
                      <div className="box3 "><select className="form-select form-filter" aria-label="Default select example">
                        <option selected>Default Sorting</option>
                        <option value="1">Popularity</option>
                        <option value="2">Low</option>
                        <option value="3">High</option>
                      </select></div>
                      <div className="box4 " ><p><span onclick="openside()"><img src="/pictures/filter.png" width="10%" alt="" />&nbsp;&nbsp;Filter</span></p></div>
                    </div>



                  </div>
                </div>
                <div className="row text-center mt-2 mb-5">
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img1.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img2.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img3.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img4.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img1.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img2.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img3.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img4.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img1.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img2.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img3.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                    <div className="card mt-3 mb-4">
                      <img src="/pictures/img4.png" alt="" />
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
                          <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
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

export default Products;