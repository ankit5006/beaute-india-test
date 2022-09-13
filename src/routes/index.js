import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import Home from "pages/Home"
import Login from "pages/Login"
import Productdetails from "pages/Productdetails"
import Products from "pages/Products"
import Signup from "pages/Signup"

const routes = [
    { path: '/', component: Home },
    { path: "/products", component: Products },
    { path: "/productsdetail", component: Productdetails },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
    { path: "/cart", component: Cart },
    { path: "/checkout", component: Checkout },
]

export default routes