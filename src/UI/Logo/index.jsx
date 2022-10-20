import React from 'react';
import logo from "../../assets/logo.svg";

import cs from './logo.module.scss'

const Logo = () => {
	return (
		<div className={cs.logo}>
			<img src={logo} alt=""/>
		</div>
	);
};

export default Logo;