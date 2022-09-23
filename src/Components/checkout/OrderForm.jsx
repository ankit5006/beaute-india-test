import { FormikProvider, useFormik } from 'formik';
import { useCart, useShop, useUser } from 'hooks';
import { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { clear } from 'store/cart/actions';
import { API_ENDPOINTS, request } from 'utilities';
import notification from 'utilities/notification';
import { toJson } from 'utilities/str';
import DefaultAddressQuery from './DefaultAddressQuery';

const OrderForm = () => {
    const { items, subTotal, total, totalQuantity } = useCart()
    const { isUserLoggedIn, user } = useUser()
    const { info: shop } = useShop()
    const dispatch = useDispatch()
    const { data: defaultAddress } = DefaultAddressQuery()
    const address = toJson(defaultAddress?.address)
    const isDisabled = isUserLoggedIn && totalQuantity > 0

    const initialValues = {
        "products": items.map(item => ({
            "order_quantity": item?.quantity,
            "product_id": item?.product_id,
            "unit_price": item?.price,
            "subtotal": item?.price * item?.quantity
        })),
        "status": 1,
        "amount": total,
        "sales_tax": 0,
        "coupon_id": 1,
        "shop_id": shop?.id,
        "paid_total": total,
        "total": total,
        "customer_contact": user?.contact,
        "payment_gateway": "CASH_ON_DELIVERY",
        "billing_address": {
            "country": address?.country,
            "state": address?.state,
            "zip": address?.zip,
            "city": address?.city,
            "address": address?.address
        },
        "shipping_address": {
            "country": address?.country,
            "state": address?.state,
            "zip": address?.zip,
            "city": address?.city,
            "address": address?.address
        }
    }

    const onSubmit = (values) => {
        request.post(API_ENDPOINTS.ORDER, values)
            .then(response => {
                if (response?.success) {
                    notification('success', response?.message)
                    dispatch(clear())
                }
            })
    }

    const formik = useFormik({ initialValues, enableReinitialize: true, onSubmit })

    return (
        <Fragment>
            <FormikProvider value={formik}>
                <form onSubmit={formik.handleSubmit}>
                    <div className="payment-optoin-section">
                        <div className="row pt-5 pb-5">
                            <div className="col-lg-8">
                                <h2>Payment Option</h2>
                                <div className="choose-payment-mode mt-5 pe-5">
                                    <ul>
                                        <div className="radio-btn-section pe-3">
                                            <li>Razor pay </li>
                                            <div className="form-check">
                                                <label className="form-check-label" for="exampleRadios1">
                                                    <input className="form-check-input" type="radio" name="payment_gateway" id="exampleRadios1" value="option1" />
                                                </label>
                                            </div>
                                        </div>

                                        <hr />
                                        <div className="radio-btn-section pe-3">
                                            <li>Cash on delivery</li>

                                            <div className="form-check">
                                                <label className="form-check-label" for="CASH_ON_DELIVERY">
                                                    <input className="form-check-input" type="radio" name="payment_gateway" id="CASH_ON_DELIVERY" value="CASH_ON_DELIVERY" checked />
                                                </label>

                                            </div>
                                        </div>
                                        <hr />
                                        <div className="radio-btn-section pe-3">
                                            <li>UPIs</li>
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="payment_gateway" id="UPIs" value="UPIs" />
                                                <label className="form-check-label" for="UPIs">

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
                                        {items.map((item, idx) => (
                                            <div className="product-price" key={idx}>
                                                <h5>{item?.model?.name}</h5>
                                                <span>Rs. {item?.price * item?.quantity}</span>
                                            </div>
                                        ))}

                                        <div className="product-price">
                                            <h5>GST</h5><span>Rs. 0</span>
                                        </div>
                                        <div className="mb-2 mt-4">
                                            <div className="new2"></div>
                                        </div>
                                        <div className="product-price">
                                            <h5>Sub Total</h5><span>Rs. {subTotal}</span>
                                        </div>
                                    </div>
                                    <button type='submit' disabled={!isDisabled} className="payment-btn mt-5" > Proceed to Payment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </FormikProvider>
        </Fragment>
    )
}

export default OrderForm