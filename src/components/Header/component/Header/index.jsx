import React from 'react';
import Logo from "../../../../UI/Logo";
import {GiHamburgerMenu} from "react-icons/gi";
import {useMediaQuery} from "react-responsive";
import {list} from "../../../../utils/List";
import {useNavigate} from "react-router-dom";
import image from '../../../../assets/basket.svg'

import cs from './Header.module.scss'

const Header = ({burger, setBurger}) => {
	const isMobile = useMediaQuery({maxWidth: 767})
	const isLaptop = useMediaQuery({minWidth: 768})
	const navigate = useNavigate()
	return (
		<div className={cs.headers_container}>
			{isMobile && <Logo width={140} height={48}/>}
			{isLaptop && <Logo width={170} height={48}/>}
			{isMobile && <GiHamburgerMenu onClick={() => setBurger(true)} className={cs.icons}/>}
			{isLaptop && (
				<React.Fragment>
					<ul className={cs.list}>
						{
							list.map(item => (
								<li onClick={() => navigate(item.path)} className={cs.list_li} key={item.id}>
									{item.title}
								</li>
							))
						}
					</ul>
					<div className={cs.container}>
						<img className={cs.basket} src={image} alt=""/>
						<button>Contact Us</button>
					</div>
				</React.Fragment>
			)}
		</div>
	);
};

export default Header;