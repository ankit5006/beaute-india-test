import { createElement, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from 'routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map((route, idx) => (
					<Fragment key={idx}>
						<Route
							path={route.path}
							element={createElement(route.component)}
						/>
					</Fragment>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
