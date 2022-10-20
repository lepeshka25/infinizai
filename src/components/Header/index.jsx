import React from 'react';
import cs from './Header.module.scss'
import basket from '../../assets/basket.svg'
import Logo from "../../UI/Logo";
import {GiHamburgerMenu} from "react-icons/gi";
import {ImCross} from "react-icons/im";
import {list, social_network} from "../../utils/List";
import {useNavigate} from "react-router-dom";

const Header = () => {
	const [burger , setBurger] = React.useState(false)
	const navigate = useNavigate()

	React.useEffect(() => {
		document.body.style.overflow = burger === true ? 'hidden' : '';
	}, [burger])

	return (
		<div className={cs.header}>
			<div className={cs.header_container}>
				<Logo/>
				<div className={cs.burgerBtn}>
					<GiHamburgerMenu onClick={() => setBurger(true)} className={cs.icons}/>
				</div>
			</div>
			<div style={burger ? {right: '0'} : {right: '-100%'}} className={cs.burger_container}>
				<div className={cs.burger_container_header}>
					<Logo/>
					<img className={cs.basket} src={basket} alt=""/>
					<ImCross onClick={() => setBurger(false)} className={cs.icons}/>
				</div>
				<div className={cs.header_container_body}>
					<h1 className={cs.h1}>MAIN APP</h1>
					{
						list.map(item => (
							<div
								onClick={() => {
									setBurger(false)
									navigate(item.path)
								}}
								className={cs.header_container_body_list}
								key={item.id}
							>
								<item.icons className={cs.icons}/>
								<p className={cs.title}>{item.title}</p>
							</div>
						))
					}
					<h1 className={cs.h1}>Contact Us</h1>
					{
						social_network.map(item => (
							<div
								onClick={() => {
									setBurger(false)
									navigate(item?.path)
								}}
								className={cs.header_container_body_list}
								key={item.id}
							>
								<item.icons className={cs.icons}/>
								<p className={cs.title}>{item.title}</p>
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};

export default Header;