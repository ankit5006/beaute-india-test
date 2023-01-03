/* eslint-disable react-hooks/exhaustive-deps */
import filterImg from "assets/pictures/filter.png";
import hrView from "assets/pictures/hr-view.svg";
import squareView from "assets/pictures/square-view.svg";
import { useState } from "react";
import StickyBox from "react-sticky-box";
import "assets/css/App.css";
import "assets/css/index.css";
import Footer from "components/Footer";
import Header from "components/Header";
import Pagination from "components/pagination/Pagination";

import {
  ProductCard,
  ProductCardListView,
  ProductQuery,
  Sidebar,
  Slider,
} from "components/products";
import { useShop } from "hooks";
import { Fragment, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Products = () => {
  const { isLoggedIn, info } = useShop();
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(30);

  const shop_id = info?.id || 0;

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/");
    }
  }, [isLoggedIn]);
  const { data } = ProductQuery();

  const handleNavigate = (e, key, value) => {
    const Obj = {};
    for (const [key, value] of searchParams) {
      if (key === "price") {
        Object.assign(Obj, { price_min: value[0] });
        Object.assign(Obj, { price_max: value[1] });
      } else {
        Object.assign(Obj, { [key]: value });
      }
    }
    if (key === "price") {
      Object.assign(Obj, { price_min: value[0] });
      Object.assign(Obj, { price_max: value[1] });
    } else {
      Object.assign(Obj, { [key]: value });
    }
    // Object.assign(Obj, { [key]: value })
    const query = new URLSearchParams(Obj).toString();
    navigate(`/products?${query}`);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentProducts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <Fragment>
      <Header />

      <div>{shop_id && <Slider shop_id={shop_id} />}</div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2 col-md-3 sidebar-contect">
            <StickyBox offsetTop={10} offsetBottom={40}>
              <div className="" id="side">
                {shop_id && <Sidebar shop_id={shop_id} />}
              </div>
            </StickyBox>
          </div>

          <div className="col-lg-10 col-md-9 ">
            <div className="main-content">
              <h1 className="m-4">Product list</h1>

              <div className="container-fluid">
                <div className="row main-row">
                  <div className="row sorting-section">
                    <div className="container  mt-5 mb-5">
                      <section id="tabs">
                        <div
                          className="nav nav-tabs "
                          id="nav-tab"
                          role="tablist"
                        >
                          <div className="d-flex">
                            <p className="pe-2">VIEW AS</p>
                            <img
                              className="im-1 mx-1 pe-2"
                              style={{ height: 20, cursor: "pointer" }}
                              src={squareView}
                              alt=""
                              data-bs-toggle="tab"
                              data-bs-target="#nav-home"
                            />
                            <img
                              className="im-2"
                              style={{ height: 20, cursor: "pointer" }}
                              src={hrView}
                              alt=""
                              data-bs-toggle="tab"
                              data-bs-target="#nav-prestige "
                            />
                          </div>
                          <div className="box2 ">
                            <p>ITEMS PER PAGE: {currentProducts.length || 0}</p>
                          </div>
                          <div className="box3 ">
                            <select
                              className="form-select form-filter"
                              aria-label="Default select example"
                              onChange={(e) =>
                                handleNavigate(e, "sort_by", e.target.value)
                              }
                              defaultChecked=""
                            >
                              <option>Default Sorting</option>
                              <option value="popularity">Popularity</option>
                              <option value="low">Price High to Low</option>
                              <option value="high">Price Low to High</option>
                            </select>
                          </div>
                          <div className="box4 ">
                            <p>
                              <span>
                                <img src={filterImg} width="10%" alt="" />
                                &nbsp;&nbsp;Filter
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="tab-content" id="nav-tabContent">
                          <div
                            className="tab-pane fade show active "
                            id="nav-home"
                            role="tabpanel"
                            aria-labelledby="nav-home-tab"
                          >
                            <div className="container mt-4 mb-4">
                              <div className="row">
                                {currentProducts.length > 0 ? (
                                  <Fragment>
                                    {currentProducts.map((product, idx) => (
                                      <Fragment key={idx}>
                                        <ProductCard product={product} />
                                      </Fragment>
                                    ))}
                                  </Fragment>
                                ) : (
                                  <div className="alert ">
                                    {/* No product found */}
                                  </div>
                                )}
                              </div>
                              <div className="page-number">
                                <Pagination
                                  totalPosts={data.length}
                                  postsPerPage={postsPerPage}
                                  setCurrentPage={setCurrentPage}
                                  currentProducts={currentProducts}
                                />
                              </div>
                            </div>
                          </div>

                          <div
                            className="tab-pane fade"
                            id="nav-prestige"
                            role="tabpanel"
                            aria-labelledby="nav-prestige-tab"
                          >
                            <div className="container mt-4 mb-4">
                              {data.length > 0 ? (
                                <Fragment>
                                  {currentProducts.map((product, idx) => (
                                    <Fragment key={idx}>
                                      <ProductCardListView product={product} />
                                    </Fragment>
                                  ))}
                                </Fragment>
                              ) : (
                                <div className="alert ">
                                  {/* No product found */}
                                </div>
                              )}
                            </div>
                            <div className="page-number">
                              <Pagination
                                totalPosts={data.length}
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentProducts={currentProducts}
                              />
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <Footer />
      </div>
    </Fragment>
  );
};

export default Products;
