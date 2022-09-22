import { createElement, Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routes from 'routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{routes.publicRoutes.map((route, idx) => (
					<Fragment key={idx}>
						<Route
							path={route.path}
							element={createElement(route.component)}
						/>
					</Fragment>
				))}

				{routes.protectedRoutes.map((route, idx) => {
					return (
						<Fragment key={idx}>
							<Route
								path={route.path}
								element={createElement(route.component)}
							// element={isAuthenticated() ? (
							// 	createElement(route.component)
							// ) : (
							// 	<Navigate to="/" replace />
							// )}
							/>
						</Fragment>
					)
				})}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
