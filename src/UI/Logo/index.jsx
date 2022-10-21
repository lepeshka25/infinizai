import React from 'react';
import logo from "../../assets/logo.svg";

import cs from './logo.module.scss'

const Logo = ({width , height}) => {
	return (
		<div style={{width: `${width}px` , height: `${height}px`}} className={cs.logo}>
			<img src={logo} alt=""/>
		</div>
	);
};

export default Logo;