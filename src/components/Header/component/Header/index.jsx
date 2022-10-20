import React from 'react';
import cs from './Header.module.scss'
import Logo from "../../../../UI/Logo";
import {GiHamburgerMenu} from "react-icons/gi";

const Header = ({burger , setBurger}) => {
	console.log(burger)
	return (
		<div className={cs.headers_container}>
			<Logo/>
			<div>
				<GiHamburgerMenu onClick={() => setBurger(true)} className={cs.icons}/>
			</div>
		</div>
	);
};

export default Header;