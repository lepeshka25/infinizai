import React from 'react';
import * as Layout from './App/Layout/index'
// import * as Auth from './App/Auth/index'
import {Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
	return (
		<div style={{overflowX: 'hidden'}}>
      <Header/>
			<Routes>
				<Route path={'/'} element={<Layout.Main/>}/>
				<Route path={'/team'} element={<Layout.Team/>}/>
				<Route path={'*'} element={<div>страницы не существует или в разработке :3</div>}/>
			</Routes>
			<Footer/>
		</div>
	);
};

export default App;