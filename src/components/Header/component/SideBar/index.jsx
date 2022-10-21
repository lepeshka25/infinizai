import React from 'react';
import Logo from "../../../../UI/Logo";
import {ImCross} from "react-icons/im";

import cs from './SideBar.module.scss'

const SideBar = ({burger, setBurger}) => {

	return (
		<div style={burger ? {right: "0px"} : {right: '-100%'}} className={cs.sideBar}>
			<div className={cs.sideBar_container}>
				<div className={cs.sideBar_container_header}>
					<Logo/>
					<ImCross onClick={() => setBurger(false)} className={cs.icon}/>
				</div>
			</div>
		</div>
	);
};

export default SideBar;