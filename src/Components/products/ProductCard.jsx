import noImage from 'assets/images/no-image.jpg';
import { Fragment } from "react";
import { Link } from "react-router-dom";
import { removeHtmlTags } from 'utilities/str';

const ProductCard = ({ product }) => {
    const coverImage = product?.image || noImage

    console.log(product);

    const onError = (e) => {
        e.target.src = noImage
    }

    return (
        <Fragment>
            <div className="col-lg-3 col-md-6 col-sm-6 text-center">
                <div className="card mt-3 mb-4">
                    <img
                        src={coverImage}
                        onError={onError}
                        alt=""
                    />
                    <h2 className="card-title mb-2">
                        {product?.name}
                    </h2>
                    <p>
                        {removeHtmlTags(product?.short_description)}
                    </p>
                    <div className="price-buy pt-3 pb-3">
                        <div className="price">
                            Rs {product?.normal_price}
                        </div>
                        <div>
                            <Link to="/productdetail" className='pro-buy-btn'>Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default ProductCard