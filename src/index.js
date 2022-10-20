import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {DataBaseProvider} from "./Provider/DatabaseProvider";
import {BrowserRouter} from "react-router-dom";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<DataBaseProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</DataBaseProvider>
);