import { useSelector } from "react-redux"

const useCart = () => {
    const { data, subTotal, total, totalQuantity, discount, coupon } = useSelector(state => state.cart)

    return {
        items: data,
        subTotal,
        total,
        totalQuantity,
        discount,
        coupon
    }

}

export default useCart