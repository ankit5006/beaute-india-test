import App from 'App';
import 'assets/css/all.min.css';
import 'assets/css/App.css';
import 'assets/css/index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SWRConfig } from 'swr';
import { swrConfig } from 'utilities';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<SWRConfig
			value={swrConfig}
		>
			<App />
		</SWRConfig>
		<ToastContainer />
	</React.StrictMode>
);