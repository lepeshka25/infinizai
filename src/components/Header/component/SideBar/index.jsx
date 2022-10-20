import React from 'react';
import cs from './SideBar.module.scss'

const SideBar = ({burger , setBurger}) => {
	return (
		<div style={burger ? {right: "0px"} : {right: '-100%'}} className={cs.sideBar}>
			<div className={cs.sideBar_container}>

			</div>
		</div>
	);
};

export default SideBar;