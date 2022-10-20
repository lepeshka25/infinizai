import React from 'react';
import Headers from './component/Header'
import SideBar from "./component/SideBar";

const Header = () => {
	const [burger , setBurger] = React.useState(false)

	React.useEffect(() => {
		document.body.overflow = burger ? 'hidden' : '';
		document.querySelector('html').style.overflow = burger ? 'hidden' : '';
	}, [burger])

	return (
		<React.Fragment>
			<Headers setBurger={setBurger} burger={burger}/>
			<SideBar burger={burger} setBurger={setBurger}/>
		</React.Fragment>
	);
};

export default Header;