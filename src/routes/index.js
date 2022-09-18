/* eslint-disable import/no-anonymous-default-export */
import Page404 from "pages/404"
import Cart from "pages/Cart"
import Checkout from "pages/Checkout"
import Home from "pages/Home"
import Login from "pages/Login"
import ProductDetail from "pages/ProductDetail"
import Products from "pages/Products"
import Signup from "pages/Signup"

const publicRoutes = [
    { path: "*", component: Page404 },
    { path: '/', component: Home },
    { path: "/login", component: Login },
    { path: "/signup", component: Signup },
]

const protectedRoutes = [
    { path: "/products", component: Products },
    { path: "/products/:id", component: ProductDetail },
    { path: "/cart", component: Cart },
    { path: "/checkout", component: Checkout },
]

export default { publicRoutes, protectedRoutes }