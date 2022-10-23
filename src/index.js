import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {DataBaseProvider} from "./Provider/DatabaseProvider";
import {BrowserRouter} from "react-router-dom";

import "animate.css/animate.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<DataBaseProvider>
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</DataBaseProvider>
);