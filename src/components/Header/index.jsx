import React from 'react';
import cs from './headers.module.scss'
import Headers from './component/Header'
import SideBar from "./component/SideBar";
import {useMediaQuery} from "react-responsive";

const Header = () => {
	const [burger , setBurger] = React.useState(false)
	const isMobile = useMediaQuery({maxWidth: 768})

	React.useEffect(() => {
		document.body.overflow = burger ? 'hidden' : '';
		document.querySelector('html').style.overflow = burger ? 'hidden' : '';
	}, [burger])

	return (
		<div className={cs.headers}>
			<Headers setBurger={setBurger} burger={burger}/>
			{isMobile && <SideBar burger={burger} setBurger={setBurger}/>}
		</div>
	);
};

export default Header;