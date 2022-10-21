import React from 'react';
import Logo from "../../UI/Logo";
import {list} from "../../utils/List";
import {useNavigate} from "react-router-dom";
import FooterList from "../../UI/FooterList";
import cs from './Footer.module.scss'
import {AiFillLinkedin, AiOutlineFacebook, AiOutlineInstagram} from "react-icons/ai";

const Footer = () => {
	const navigate = useNavigate()
	return (
		<div className={cs.footer}>
			<div className={cs.container_footer}>
				<div className={cs.container_info_company}>
					<Logo/>
					<p>
						Lorem ipsum dolor amet, consectetur adipiscing elit. Eget nisl nunc quam ac sed turpis volutpat. Cursus sed massa non .
					</p>
				</div>
				<FooterList cs={cs} list={list} logo={'Menu Item'}/>
				<FooterList cs={cs} list={list} logo={'Other Pages'}/>
				<div className={cs.container_social_icons}>
					<h2>Social Icons</h2>
					<div className={cs.container_icons}>
						<AiOutlineInstagram className={cs.icon}/>
						<AiFillLinkedin className={cs.icon}/>
						<AiOutlineFacebook className={cs.icon}/>
					</div>
				</div>
			</div>
			<div className={cs.container_footer_text}>
				<p>Copyright by 2021 Flowzai</p>
			</div>
		</div>
	);
};

export default Footer;