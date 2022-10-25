import React from 'react';
import Logo from "../../../../UI/Logo";
import {ImCross} from "react-icons/im";
import {useNavigate} from "react-router-dom";
import {list} from "../../../../utils/List";
import basket from '../../../../assets/basket.svg'
import cs from './SideBar.module.scss'

const SideBar = ({burger, setBurger}) => {
	const navigate = useNavigate()

	return (
		<div style={burger ? {right: "0px"} : {right: '-100%'}} className={cs.sideBar}>
			<div className={cs.sideBar_container}>

				<div className={cs.sideBar_container_header}>
					<Logo/>
					<ImCross onClick={() => setBurger(false)} className={cs.icon}/>
				</div>

				<div className={cs.sideBar_container_body}>
					<ul className={cs.list}>
						{
							list?.map(item => (
								<li onClick={() => navigate(item.path)} key={item.id}>
									<item.icons className={cs.icon}/>
									<p className={cs.link}>{item.title}</p>
								</li>
							))
						}
					</ul>
				</div>

				<div className={cs.sideBar_container_footer}>
					<div className={cs.container_basket}>
						<img src={basket} alt=""/>
					</div>

					<div className={cs.btn}>
						<button>Contact Us</button>
					</div>
				</div>

			</div>
		</div>
	);
};

export default SideBar;