import Signup from 'Pages/Signup';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Allproduct from "./Pages/Allproduct";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Index from "./Pages/Index";
import Login from "./Pages/Login";
import Productdetails from "./Pages/Productdetails";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Index />} />
				<Route path="/allproduct" element={<Allproduct />} />
				<Route path="/productdetail" element={<Productdetails />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Signup />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/checkout" element={<Checkout />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
